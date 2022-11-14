package com.hipmap.domain.area.dto.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "시/도 정보가 담긴 객체", description = "지역코드, 시/도명이 담긴 객체")
public class GetSidoResponse {
    @ApiModelProperty(value = "지역코드")
    String code;
    @ApiModelProperty(value = "시/도 명")
    String sido;
}
