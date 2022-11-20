package com.hipmap.domain.user.dto.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "아이디 중복체크 결과", description = "result 가 false 일시 아이디가 중복 됨. true 시 사용 가능한 아이디")
public class UserIdDupCheckResponse {
    @ApiModelProperty(value = "중복 검사 결과")
    boolean result;
}
