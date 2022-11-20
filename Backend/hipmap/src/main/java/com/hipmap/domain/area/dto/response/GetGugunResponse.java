package com.hipmap.domain.area.dto.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "구군 정보가 담긴 객체", description = "지역코드, 시/도, 구/군명이 담긴 객체")
public class GetGugunResponse {
    @ApiModelProperty(value = "지역코드")
    String code;
    @ApiModelProperty(value = "시도 명")
    String sido;
    @ApiModelProperty(value = "구군 명")
    String gugun;
}
