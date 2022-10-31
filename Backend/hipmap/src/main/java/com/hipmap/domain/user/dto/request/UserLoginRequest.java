package com.hipmap.domain.user.dto.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "유저 로그인 정보", description = "유저 로그인 정보가 담긴 객체")
public class UserLoginRequest {
    @ApiModelProperty(value = "유저 ID (username)")
    String username;
    @ApiModelProperty(value = "유저 password")
    String password;
}
