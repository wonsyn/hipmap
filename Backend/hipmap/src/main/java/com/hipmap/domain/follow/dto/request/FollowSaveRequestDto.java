package com.hipmap.domain.follow.dto.request;

import com.hipmap.domain.follow.FollowEntity;
import com.hipmap.domain.user.UserEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "팔로잉 유저 정보 저장 Request 객체"
        , description = "userEntity와 followingUserEntity로 팔로우 관계를 확인할 때 사용한다.")
public class FollowSaveRequestDto {
    @ApiModelProperty(value = "유저 Entity")
    UserEntity userEntity;
    @ApiModelProperty(value = "팔로잉 유저 Entity")
    UserEntity followingUserEntity;

    public FollowEntity toEntity(){

        return FollowEntity.builder()
                .user(userEntity)
                .followingUser(followingUserEntity)
                .build();
    }

}
