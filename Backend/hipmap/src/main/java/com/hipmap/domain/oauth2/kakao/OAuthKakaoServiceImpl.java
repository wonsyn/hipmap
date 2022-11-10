package com.hipmap.domain.oauth2.kakao;

import com.hipmap.domain.oauth2.kakao.dto.KakaoUserInfo;
import com.hipmap.domain.oauth2.kakao.dto.response.KakaoAuthFalseResponse;
import com.hipmap.domain.oauth2.kakao.dto.response.KakaoAuthResponse;
import com.hipmap.domain.oauth2.kakao.dto.response.KakaoAuthTrueResponse;
import com.hipmap.domain.user.UserEntity;
import com.hipmap.domain.user.UserRepository;
import com.hipmap.domain.user.dto.Tokens;
import com.hipmap.global.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OAuthKakaoServiceImpl implements OAuthKakaoService{

    @Value("${spring.security.oauth2.client.registration.kakao.client-secret}")
    String clientSecret;
    @Value("${spring.security.oauth2.client.registration.kakao.client-id}")
    String clientId;
    @Value("${spring.security.oauth2.client.provider.kakao.token-uri}")
    String tokenUri;
    @Value("${spring.security.oauth2.client.provider.kakao.user-info-uri}")
    String userInfoUri;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;


    @Override
    public KakaoAuthResponse auth(String code) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers  = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", clientId);
        params.add("redirect_uri", "http://localhost:8080/api/oauth/kakao/result");
        params.add("code", code);
        params.add("client_secret", clientSecret);

        HttpEntity<MultiValueMap<String,String>> kakaoTokenRequest =
                new HttpEntity<>(params, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                tokenUri,
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        JSONObject body = new JSONObject(response.getBody());
        String email = this.getUserInfo(body.getString("access_token"));

        Optional<UserEntity> optionalUser = userRepository.findByEmail(email);
        KakaoAuthResponse authResponse;
        if(optionalUser.isPresent()) {
            UserEntity user = optionalUser.get();
            String accessToken = jwtUtil.generateToken(user.getUserId(), user.getUsername());
            String refreshToken = jwtUtil.generateRefreshToken(user.getUserId(), user.getUsername());
            KakaoUserInfo userInfo = KakaoUserInfo.makeInfo(optionalUser.get());
            Tokens tokens = Tokens.builder()
                    .accessToken(accessToken)
                    .refreshToken(refreshToken)
                    .expireMilliSec(JwtUtil.TOKEN_VALIDATION_SECOND)
                    .build();
            authResponse = new KakaoAuthTrueResponse(true, userInfo, tokens);
        } else {
            authResponse = new KakaoAuthFalseResponse(false, email);
        }

        return authResponse;
    }

    private String getUserInfo(String token) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers  = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        headers.add("Authorization", "Bearer " + token);

        HttpEntity<MultiValueMap<String,String>> kakaoTokenRequest =
                new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                userInfoUri,
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        return new JSONObject(response.getBody()).getJSONObject("kakao_account").getString("email");
    }
}
