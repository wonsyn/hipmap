package com.hipmap.domain.oauth2;

import com.hipmap.domain.oauth2.kakao.OAuthKakaoService;
import com.hipmap.domain.oauth2.kakao.dto.response.KakaoAuthResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/oauth")
@RequiredArgsConstructor
@Api(tags = { "OAuth 관련 소셜로그인" })
public class OAuth2Controller {

    private final OAuthKakaoService oAuthKakaoService;

    @GetMapping("/kakao")
    @ApiOperation(value = "카카오 소셜 로그인/회원가입", notes = "입력받은 코드 정보를 이용해 로직 수행")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public KakaoAuthResponse authKakaoToken(@RequestParam String code) {
        return oAuthKakaoService.auth(code);
    }
}
