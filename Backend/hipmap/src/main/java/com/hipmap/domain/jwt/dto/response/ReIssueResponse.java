package com.hipmap.domain.jwt.dto.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

import java.util.Map;

@Data
@Builder
@ApiModel(value = "토큰 재발급 응답 DTO", description = "응답 메시지와 재발급된 토큰, 만료 시간이 담긴 객체")
public class ReIssueResponse {
    @ApiModelProperty(value = "응답 메시지")
    String message;
    @ApiModelProperty(value = "재발급된 토큰(access, refresh)")
    Map<String, String> tokens;
    @ApiModelProperty(value = "만료 시간")
    Long expireMilliSec;
}
