package com.hipmap.domain.area.dto.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "동 정보가 담긴 객체", description = "지역코드, 시/도, 구/군, 동명이 담긴 객체")
public class GetDongResponse {
    @ApiModelProperty(value = "지역코드")
    String code;
    @ApiModelProperty(value = "시/도 명")
    String sido;
    @ApiModelProperty(value = "구/군 명")
    String gugun;
    @ApiModelProperty(value = "동 명")
    String dong;
}
