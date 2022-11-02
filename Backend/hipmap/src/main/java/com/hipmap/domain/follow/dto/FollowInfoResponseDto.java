package com.hipmap.domain.follow.dto;

import lombok.*;

@Getter
@Builder
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FollowInfoResponseDto {
    Long userId;
    String followUserName; // username이 팔로우하고있는 사람
    String proImgSrc;

}
