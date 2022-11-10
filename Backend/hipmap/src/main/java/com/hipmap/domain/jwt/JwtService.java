package com.hipmap.domain.jwt;

import com.hipmap.domain.jwt.dto.JwtUserInfo;
import com.hipmap.domain.jwt.dto.response.ReIssueResponse;
import com.hipmap.domain.jwt.dto.response.RefreshResponse;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import com.hipmap.domain.user.UserEntity;
import com.hipmap.domain.user.UserRepository;
import com.hipmap.domain.user.UserService;
import com.hipmap.domain.user.dto.Tokens;
import com.hipmap.domain.user.dto.response.LoginUserInfo;
import com.hipmap.global.util.JwtUtil;
import com.hipmap.global.util.RedisUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JwtService {
    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final RedisUtil redisUtil;
    private final UserRepository userRepository;

    public ReIssueResponse reIssue(String refreshToken) {
        String username = null;

        if(refreshToken != null) {
            username = jwtUtil.getUsername(refreshToken);
        }
        if(username != null && redisUtil.getData(refreshToken).equals(username)) {
            UserDetails userDetails = userService.loadUserByUsername(username);
            if(jwtUtil.validateToken(refreshToken, userDetails)) {
                JwtUserInfo info = jwtUtil.getUserInfo(refreshToken);
                String access = jwtUtil.generateToken(info.getId(), info.getUsername());
                String refresh = jwtUtil.generateRefreshToken(info.getId(), info.getUsername());
                Tokens tokens = Tokens.builder()
                        .accessToken(access)
                        .refreshToken(refresh)
                        .expireMilliSec(JwtUtil.TOKEN_VALIDATION_SECOND)
                        .build();
                return ReIssueResponse.builder()
                        .message("success")
                        .tokens(tokens)
                        .build();
            }
        }
        return ReIssueResponse.builder()
                .message("refresh token error; expired or wrong value;")
                .tokens(null)
                .build();
    }

    public RefreshResponse refresh(String token) {
        JwtUserInfo tokenUserInfo = jwtUtil.getUserInfo(token);
        UserEntity user = userRepository.findById(tokenUserInfo.getId()).orElseThrow(UserNotFoundException::new);
        return RefreshResponse.builder()
                .userInfo(LoginUserInfo.makeInfo(user))
                .tokens(Tokens.builder()
                        .accessToken(jwtUtil.generateToken(user.getUserId(), user.getUsername()))
                        .refreshToken(jwtUtil.generateRefreshToken(user.getUserId(), user.getUsername()))
                        .expireMilliSec(JwtUtil.TOKEN_VALIDATION_SECOND)
                        .build())
                .build();
    }
}
