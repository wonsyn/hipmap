package com.hipmap.domain.user.dto.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "유저 정보를 담고있는 DTO", description = "유저의 팔로우 여부도 포함")
public class ReadUserInfoResponse {
    @ApiModelProperty(value = "유저의 팔로우 여부")
    boolean isFollow;
    @ApiModelProperty(value = "해당하는 유저 정보")
    UserReadResponse userInfo;
}
