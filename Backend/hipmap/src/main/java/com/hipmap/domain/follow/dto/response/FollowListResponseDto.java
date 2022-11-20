package com.hipmap.domain.follow.dto.response;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@ApiModel(value = "follow의 정보를 wrapping해주는 객체")
public class FollowListResponseDto<T> {
    public T follow;
}
