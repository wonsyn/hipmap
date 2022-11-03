package com.hipmap.domain.user.dto.response;

import com.hipmap.domain.user.dto.Tokens;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "로그인 결과 토큰 리스트", description = "로그인 결과로 생성된 JWT토큰과 만료일자가 담긴 객체")
public class UserLoginResponse {
    @ApiModelProperty(value = "JWT 토큰, (accessToken, refreshToken)")
    Tokens tokens;
}
