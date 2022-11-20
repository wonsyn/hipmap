package com.hipmap.domain.follow.dto.response;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "팔로우 상태인지 반환하는 Response 객체"
        , description = "로그인 아이디가 조회하는 유저를 팔로우 중인지 확인하는 객체")
public class FollowConfirmResponseDto {
    private Boolean followConfirm;

}
