package com.hipmap.domain.like.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "수정된 Like 객체의 반환 정보", description = "수정된 Like 객체의 정보 반환")
public class LikeUpdateResponseDto {
    @ApiModelProperty(value = "변경된 좋아요상태")
    Boolean isLike;
    @ApiModelProperty(value = "해당 shorts의 좋아요 갯수 반환")
    Long likeCount;
}
