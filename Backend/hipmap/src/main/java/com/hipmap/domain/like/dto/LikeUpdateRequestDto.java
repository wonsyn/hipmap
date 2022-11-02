package com.hipmap.domain.like.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@ApiModel(value = "업데이트할 Like DTO", description = "업데이트할 Like의 정보를 담고 있는 객체")
public class LikeUpdateRequestDto {
    @ApiModelProperty(value = "해당 shorts의 id")
    Long shortsId;
    @ApiModelProperty(value = "변경하려는 like 상태")
    Boolean isLike;

}
