package com.hipmap.domain.user;

import com.hipmap.domain.follow.FollowRepository;
import com.hipmap.domain.jwt.dto.JwtUserInfo;
import com.hipmap.domain.shorts.ShortsRepository;
import com.hipmap.domain.user.Exception.EmailDuplicatedException;
import com.hipmap.domain.user.Exception.LoginFailException;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import com.hipmap.domain.user.dto.request.UserRegistRequest;
import com.hipmap.domain.user.dto.response.UserReadResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;

@RequiredArgsConstructor
@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final ShortsRepository shortsRepository;
    private final FollowRepository followRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
    }

    public JwtUserInfo login(String username, String password) {
        UserEntity user = userRepository.findByUsernameAndPassword(username, password).orElseThrow(LoginFailException::new);
        return JwtUserInfo.builder()
                .id(user.getUserId())
                .username(user.getUsername())
                .email(user.getEmail())
                .nickname(user.getNickname())
                .label_name(user.getLabelName())
                .role(user.getRole())
                .build();
    }

    public void regist(UserRegistRequest userInfo) {
        UserEntity user = userRepository.findByEmail(userInfo.getEmail()).orElseThrow(EmailDuplicatedException::new);

        userRepository.save(UserEntity.builder()
                .email(userInfo.getEmail())
                .nickname(userInfo.getNickname())
                .role(Admin.ROLE_USER)// 최초 가입시 USER 로 설정
                .password(userInfo.getPassword())
                .username(userInfo.getUsername())
                .proImgSrc(null)
                .labelCharSrc(null)
                .labelName(userInfo.getLabeling())
                .followPrivate(false)
                .build());
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
}
