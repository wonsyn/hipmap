package com.hipmap.domain.user.dto.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "유저 정보 수정 Request 객체", description = "객체 내부의 nickname, label, followPrivate 값으로 수정해준다.")
public class UserEditRequest {
    @ApiModelProperty(value = "닉네임")
    String nickname;
    @ApiModelProperty(value = "레이블 명")
    String label;
    @ApiModelProperty(value = "팔로우 공개여부")
    boolean followPrivate;
}
