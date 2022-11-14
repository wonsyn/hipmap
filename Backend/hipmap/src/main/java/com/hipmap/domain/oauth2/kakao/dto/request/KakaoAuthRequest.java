package com.hipmap.domain.oauth2.kakao.dto.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "카카오 로그인 코드, RedirectUri가 담길 객체")
public class KakaoAuthRequest {
    @ApiModelProperty(value = "카카오 측에서 발급받은 로그인 코드")
    String code;
    @ApiModelProperty(value = "설정해둔 RedirectUri")
    String redirectUri;
}
