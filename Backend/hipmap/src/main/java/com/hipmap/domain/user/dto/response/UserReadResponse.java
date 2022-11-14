package com.hipmap.domain.user.dto.response;

import com.hipmap.domain.user.Admin;
import com.hipmap.domain.user.UserEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "유저 정보를 담는 객체", description = "userId 로 조회한 유저의 정보가 담겨있다.")
public class UserReadResponse {
    @ApiModelProperty(value = "유저의 고유 ID(Long)")
    Long userId;
    @ApiModelProperty(value = "유저 ID(String)")
    String username;
    @ApiModelProperty(value = "이메일")
    String email;
    @ApiModelProperty(value = "권한 {USER, ADMIN}")
    Admin role;
    @ApiModelProperty(value = "닉네임")
    String nickname;
    @ApiModelProperty(value = "프로필 이미지 소스")
    String proImgSrc;
    @ApiModelProperty(value = "레이블링 명")
    String labelName;
    @ApiModelProperty(value = "게시글(쇼츠) 수")
    Long shortsCount;
    @ApiModelProperty(value = "팔로잉 수")
    Long followingCount;
    @ApiModelProperty(value = "팔로워 수")
    Long followerCount;
    @ApiModelProperty(value = "팔로우 공개 여부(비공개 : true, 공개: false)")
    boolean followPrivate;

    public static UserReadResponse of(UserEntity user) {
        return UserReadResponse.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .email(user.getEmail())
                .role(user.getRole())
                .proImgSrc(user.getProImgSrc())
                .labelName(user.getLabelName())
                .nickname(user.getNickname())
                .shortsCount((long) user.getShorts().size())
                .followerCount((long) user.getFollowers().size())
                .followingCount((long) user.getFollowings().size())
                .followPrivate(user.getFollowPrivate())
                .build();
    }
}
