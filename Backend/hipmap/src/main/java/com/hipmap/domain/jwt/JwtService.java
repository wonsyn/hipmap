package com.hipmap.domain.jwt;

import com.hipmap.domain.jwt.dto.JwtUserInfo;
import com.hipmap.domain.jwt.dto.response.ReIssueResponse;
import com.hipmap.domain.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class JwtService {
    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final RedisUtil redisUtil;

    public ReIssueResponse reIssue(String refreshToken) {
        String username = null;

        if(refreshToken != null) {
            username = jwtUtil.getUsername(refreshToken);
        }
        if(username != null && redisUtil.getData(refreshToken).equals(username)) {
            UserDetails userDetails = userService.loadUserByUsername(username);
            if(jwtUtil.validateToken(refreshToken, userDetails)) {
                JwtUserInfo info = jwtUtil.getUserInfo(refreshToken);
                String access = jwtUtil.generateToken(info.toEntity());
                String refresh = jwtUtil.generateRefreshToken(info.toEntity());
                Map<String, String> tokens = new HashMap<>();
                tokens.put("newAccessToken", access);
                tokens.put("newRefreshToken", refresh);
                return ReIssueResponse.builder()
                        .message("success")
                        .tokens(tokens)
                        .expireMilliSec(JwtUtil.TOKEN_VALIDATION_SECOND)
                        .build();
            }
        }
        return ReIssueResponse.builder()
                .message("refresh token error; expired or wrong value;")
                .tokens(null)
                .expireMilliSec(null)
                .build();
    }
}
