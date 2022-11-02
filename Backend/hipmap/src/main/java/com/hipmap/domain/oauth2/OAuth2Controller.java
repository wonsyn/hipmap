package com.hipmap.domain.oauth2;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/oauth")
@RequiredArgsConstructor
public class OAuth2Controller {

    private final OAuthKakaoService oAuthKakaoService;

    @GetMapping("/kakao")
    public void authKakaoToken(@RequestParam String code) {
        System.out.println("before code: " + code);
        oAuthKakaoService.auth(code);
    }

//    @GetMapping("/kakao/")
//    public void authKakaoToken(@RequestParam String code) {
//        System.out.println("before code: " + code);
//        oAuthKakaoService.auth(code);
//    }
}
