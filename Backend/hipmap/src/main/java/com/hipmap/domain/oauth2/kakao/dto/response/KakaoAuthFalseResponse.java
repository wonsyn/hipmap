package com.hipmap.domain.oauth2.kakao.dto.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Getter
@ToString
@ApiModel(value = "미가입 상태시 이메일을 담아주는 응답 객체")
public class KakaoAuthFalseResponse extends KakaoAuthResponse {
    @ApiModelProperty(value = "회원의 이메일")
    String email;

    public KakaoAuthFalseResponse(boolean isSigned, String email) {
        super(isSigned);
        this.email = email;
    }
}
