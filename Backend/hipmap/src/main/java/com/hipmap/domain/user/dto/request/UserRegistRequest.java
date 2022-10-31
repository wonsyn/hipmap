package com.hipmap.domain.user.dto.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "유저 회원가입 정보", description = "회원가입 할 유저의 정보가 담긴 객체")
public class UserRegistRequest {
    @ApiModelProperty(value = "유저 ID (username)")
    String username;
    @ApiModelProperty(value = "유저 password")
    String password;
    @ApiModelProperty(value = "유저 email")
    String email;
    @ApiModelProperty(value = "유저 nickname")
    String nickname;
    @ApiModelProperty(value = "유저 레이블링 이름")
    String labeling;
}
