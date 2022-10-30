package com.hipmap.domain.follow.dto;

import com.hipmap.domain.follow.FollowEntity;
import com.hipmap.domain.user.UserEntity;
import lombok.*;

@Getter
@Builder
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FollowerFindAllResponseDto {
    String username;
    String followerName; // username이 팔로우하고있는 사람
//    String profileImg; 이미지는 나중에

    public FollowerFindAllResponseDto(FollowEntity followEntity) {
        this.username = followEntity.getUser().getUsername();
        this.followerName = followEntity.getFollowingUser().getUsername();
    }

}
