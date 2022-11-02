package com.hipmap.domain.follow.dto;

import com.hipmap.domain.follow.FollowEntity;
import com.hipmap.domain.user.UserEntity;
import com.hipmap.domain.user.UserRepository;
import lombok.*;

@Getter
@Builder
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FollowSaveRequestDto {
    UserEntity userId;
    UserEntity followingUser;

    public FollowEntity toEntity(){

        return FollowEntity.builder()
                .user(userId)
                .followingUser(followingUser)
                .build();
    }

}
