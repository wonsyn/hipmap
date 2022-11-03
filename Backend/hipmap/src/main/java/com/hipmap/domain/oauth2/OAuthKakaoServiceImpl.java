package com.hipmap.domain.oauth2;

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

import java.util.HashMap;
import java.util.Map;

@Service
public class OAuthKakaoServiceImpl implements OAuthKakaoService{

    @Value("${spring.security.oauth2.client.registration.kakao.client-secret}")
    String clientSecret;
    @Value("${spring.security.oauth2.client.registration.kakao.client-id}")
    String clientId;
    @Value("${spring.security.oauth2.client.provider.kakao.token-uri}")
    String tokenUri;
    @Value("${spring.security.oauth2.client.provider.kakao.user-info-uri}")
    String userInfoUri;


    @Override
    public Map<String, String> auth(String code) {
        // POST방식으로 key=value 데이터 요청(카카오쪽으로 찌른다)
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers  = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HttpBody 오브젝트 생성
        // 일단 param들 변수화 안함.. 추후 예정
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", clientId);
        params.add("redirect_uri", "http://localhost:8080/api/oauth/kakao/result");
        params.add("code", code);
        params.add("client_secret", clientSecret);

        // HttpHeader와 HttpBody를 하나의 오브젝트로 담는다
        HttpEntity<MultiValueMap<String,String>> kakaoTokenRequest =
                new HttpEntity<>(params, headers);

        // 실제요청
        ResponseEntity<String> response = restTemplate.exchange(
                tokenUri,
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        System.out.println("response : ");
        System.out.println(response.toString());
        System.out.println("response body : ");
        System.out.println(response.getBody());

        JSONObject body = new JSONObject(response.getBody());

        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", body.getString("access_token"));
        tokens.put("refreshToken", body.getString("refresh_token"));
        return tokens;
    }

    @Override
    public Map<String, String> getUserInfo(String token) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers  = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();

        return null;
    }
}
