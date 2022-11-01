package com.hipmap.domain.follow.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FollowListResponseDto<T> {
    public T follow;
}
