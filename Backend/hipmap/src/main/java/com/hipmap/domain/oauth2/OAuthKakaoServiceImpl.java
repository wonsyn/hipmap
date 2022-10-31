package com.hipmap.domain.oauth2;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class OAuthKakaoServiceImpl implements OAuthKakaoService{

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
        params.add("client_id", "29250d362049cababb2b673f785f8ff2");
        params.add("redirect_uri", "http://localhost:8080/api/oauth/kakao");
        params.add("code", code);
        params.add("client_secret", "NXpC0rZwukqYSUQTJK4368oNotY5rFJb");

        // HttpHeader와 HttpBody를 하나의 오브젝트로 담는다
        HttpEntity<MultiValueMap<String,String>> kakaoTokenRequest =
                new HttpEntity<>(params, headers);

        // 실제요청
        ResponseEntity<String> response = restTemplate.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        System.out.println("response : ");
        System.out.println(response.toString());

        return null;
    }
}
