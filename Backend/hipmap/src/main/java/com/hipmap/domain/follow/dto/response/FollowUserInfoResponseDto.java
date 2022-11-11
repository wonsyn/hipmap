package com.hipmap.domain.follow.dto.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "유저 정보 반환 Request 객체"
        , description = "응답으로 받을 팔로우에 대한 userId, username, proImgSrc 값을 담아준다.")
public class FollowUserInfoResponseDto {
    @ApiModelProperty(value = "팔로우 userId")
    Long userId;
    @ApiModelProperty(value = "팔로우 username")
    String followUserName;
    @ApiModelProperty(value = "팔로우 프로필 이미지 소스")
    String proImgSrc;

}
