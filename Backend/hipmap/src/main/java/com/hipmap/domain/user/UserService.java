package com.hipmap.domain.user;

import com.hipmap.domain.follow.FollowRepository;
import com.hipmap.domain.jwt.dto.JwtUserInfo;
import com.hipmap.domain.shorts.ShortsRepository;
import com.hipmap.domain.user.Exception.EmailDuplicatedException;
import com.hipmap.domain.user.Exception.FailedUploadProfileException;
import com.hipmap.domain.user.Exception.LoginFailException;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import com.hipmap.domain.user.dto.Tokens;
import com.hipmap.domain.user.dto.request.UserRegistRequest;
import com.hipmap.domain.user.dto.response.LoginUserInfo;
import com.hipmap.domain.user.dto.response.UserLoginResponse;
import com.hipmap.domain.user.dto.response.UserReadResponse;
import com.hipmap.global.util.JwtUtil;
import com.hipmap.global.util.RedisUtil;
import com.hipmap.global.util.S3Util;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService implements UserDetailsService {
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;
    private final ShortsRepository shortsRepository;
    private final FollowRepository followRepository;
    private final AuthEmailService authEmailService;
    private final S3Util s3util;
    private final RedisUtil redisUtil;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return CustomUserDetail.builder()
                .userEntity(userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다.")))
                .build();
    }

    public UserLoginResponse login(String username, String password) {
        UserEntity user = userRepository.findByUsername(username).orElseThrow(LoginFailException::new);

        if(!passwordEncoder.matches(password, user.getPassword())) {
            throw new LoginFailException();
        }

        JwtUserInfo userInfo = JwtUserInfo.builder()
                .id(user.getUserId())
                .username(user.getUsername())
                .email(user.getEmail())
                .nickname(user.getNickname())
                .label_name(user.getLabelName())
                .role(user.getRole())
                .build();

        final String token = jwtUtil.generateToken(userInfo.toEntity());
        final String refreshJwt = jwtUtil.generateRefreshToken(userInfo.toEntity());
        redisUtil.setDataExpire(refreshJwt, userInfo.getUsername(), JwtUtil.REFRESH_TOKEN_VALIDATION_SECOND);

        return UserLoginResponse.builder()
                .tokens(Tokens.builder()
                        .accessToken(token)
                        .refreshToken(refreshJwt)
                        .expireMilliSec(JwtUtil.TOKEN_VALIDATION_SECOND)
                        .build())
                .user(LoginUserInfo.makeInfo(user))
                .build();
    }

    public void regist(UserRegistRequest userInfo) {
        Optional<UserEntity> optionalUser = userRepository.findByEmail(userInfo.getEmail());
        if(optionalUser.isPresent()) throw new EmailDuplicatedException();

        String password = passwordEncoder.encode(userInfo.getPassword());

        userRepository.save(UserEntity.builder()
                .email(userInfo.getEmail())
                .nickname(userInfo.getNickname())
                .role(Admin.ROLE_USER)// 최초 가입시 USER 로 설정
                .password(password)
                .username(userInfo.getUsername())
                .proImgSrc(null)
                .labelCharSrc(null)
                .labelName(userInfo.getLabeling())
                .followPrivate(false)
                .regDateTime(LocalDateTime.now())
                .isCerted(false)
                .build());

        authEmailService.sendAuthMail(userInfo.getEmail());
    }

    public boolean idCheck(String username) {
        return userRepository.findByUsername(username).isEmpty();
    }

    @Transactional
    public void update(Long userId, String nickname, String label, boolean followPrivate) {
        UserEntity user = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        user.updateInfo(nickname, label, followPrivate);
    }

    public UserReadResponse readInfo(Long userId) {
        UserEntity user = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        Long shortsCount = shortsRepository.countByUser(user);
        Long followerCount = followRepository.countByFollowingUser(user);
        Long followingCount = followRepository.countByUser(user);

        return UserReadResponse.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .email(user.getEmail())
                .role(user.getRole())
                .proImgSrc(user.getProImgSrc())
                .labelName(user.getLabelName())
                .nickname(user.getNickname())
                .shortsCount(shortsCount)
                .followerCount(followerCount)
                .followingCount(followingCount)
                .followPrivate(user.getFollowPrivate())
                .build();
    }

    @Transactional
    public void uploadProfile(MultipartFile file, Long userId) {
        String storedFileName;

        if(!file.isEmpty()) {
            try {
                storedFileName = s3util.upload(file, "profile", userId);
            } catch (IOException e) {
                throw new FailedUploadProfileException();
            }

            UserEntity user = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
            if(user.getProImgSrc() != null) {
                s3util.delete(user.getProImgSrc());
            }
            user.updateProfileImg(storedFileName);
        }
    }

    @Transactional
    public void deleteProfile(Long userId) {
        UserEntity user = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        if(user.getProImgSrc() != null) {
            s3util.delete(user.getProImgSrc());
        }
        user.updateProfileImg(null);
    }

    @Transactional
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
