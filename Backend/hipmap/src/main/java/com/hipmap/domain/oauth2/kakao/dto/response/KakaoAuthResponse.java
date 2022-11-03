package com.hipmap.domain.oauth2.kakao.dto.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@ApiModel(value = "회원가입 여부를 판단하는 응답 객체")
public class KakaoAuthResponse {
    @ApiModelProperty(value = "회원가입 여부", notes = "true -> 가입상태, false -> 미가입 상태")
    boolean isSigned;
}
