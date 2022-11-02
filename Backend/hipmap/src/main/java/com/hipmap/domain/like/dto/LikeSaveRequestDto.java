package com.hipmap.domain.like.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@ApiModel(value = "저장할 Like 객체", description = "저장할 Like의 정보를 담고 있는 객체")
public class LikeSaveRequestDto {
    @ApiModelProperty(value = "로그인한 유저의 id")
    private Long userId;
    @ApiModelProperty(value = "대상 shorts의 id")
    private Long shorts;
}
