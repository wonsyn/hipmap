package com.hipmap.domain.oauth2.kakao.dto;

import com.hipmap.domain.user.Admin;
import com.hipmap.domain.user.UserEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@ApiModel(value = "회원 정보를 담는 객체")
public class KakaoUserInfo {
    @ApiModelProperty(value = "유저 고유 ID (Long)")
    Long userId;
    @ApiModelProperty(value = "유저 ID (String)")
    String username;
    @ApiModelProperty(value = "유저 nickname")
    String nickname;
    @ApiModelProperty(value = "유저 labeling")
    String labeling;
    @ApiModelProperty(value = "유저 email")
    String email;
    @ApiModelProperty(value = "유저 권한(ROLE_USER, ROLE_ADMIN)")
    Admin role;

    public static KakaoUserInfo makeInfo(UserEntity user) {
        return KakaoUserInfo.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .nickname(user.getNickname())
                .labeling(user.getLabelName())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }
}
