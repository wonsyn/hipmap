package com.hipmap.domain.user.dto.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "유저 회원가입 결과 객체", description = "성공 시 가입 이메일 반환")
public class UserRegistResponse {
    @ApiModelProperty(value = "회원가입 Email")
    String email;
}
