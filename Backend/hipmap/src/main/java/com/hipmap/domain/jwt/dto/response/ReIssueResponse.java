package com.hipmap.domain.jwt.dto.response;

import com.hipmap.domain.user.dto.Tokens;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "토큰 재발급 응답 DTO", description = "응답 메시지와 재발급된 토큰, 만료 시간이 담긴 객체")
public class ReIssueResponse {
    @ApiModelProperty(value = "응답 메시지")
    String message;
    @ApiModelProperty(value = "재발급된 토큰(newAccessToken, newRefreshToken)")
    Tokens tokens;
}
