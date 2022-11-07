package com.hipmap.domain.jwt.dto.response;

import com.hipmap.domain.user.dto.Tokens;
import com.hipmap.domain.user.dto.response.LoginUserInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "토큰, 유저 정보", description = "토큰을 이용한 사용자 정보 조회에 필요한 객체")
public class RefreshResponse {
    @ApiModelProperty(value = "재발급된 토큰(newAccessToken, newRefreshToken)")
    Tokens tokens;
    @ApiModelProperty(value = "로그인 유저 정보")
    LoginUserInfo userInfo;
}
