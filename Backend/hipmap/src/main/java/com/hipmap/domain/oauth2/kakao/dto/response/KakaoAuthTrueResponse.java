package com.hipmap.domain.oauth2.kakao.dto.response;

import com.hipmap.domain.oauth2.kakao.dto.KakaoUserInfo;
import com.hipmap.domain.user.dto.Tokens;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Getter
@ToString
@ApiModel(value = "가입 상태시 유저 정보와 토큰을 반환하는 응답 객체")
public class KakaoAuthTrueResponse extends KakaoAuthResponse {
    @ApiModelProperty(value = "유저 정보")
    KakaoUserInfo userInfo;
    @ApiModelProperty(value = "토큰 정보")
    Tokens tokens;

    public KakaoAuthTrueResponse(boolean isSign, KakaoUserInfo userInfo, Tokens tokens) {
        super(isSign);
        this.userInfo = userInfo;
        this.tokens = tokens;
    }
}
