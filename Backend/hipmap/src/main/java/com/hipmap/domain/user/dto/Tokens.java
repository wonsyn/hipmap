package com.hipmap.domain.user.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "토큰을 담아주는 객체")
public class Tokens {
    @ApiModelProperty(value = "access-token")
    String accessToken;
    @ApiModelProperty(value = "refresh-token")
    String refreshToken;
    @ApiModelProperty(value = "token 만료 시간 (milli sec)")
    long expireMilliSec;
}
