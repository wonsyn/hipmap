package com.hipmap.domain.like;

import com.hipmap.domain.like.dto.LikeSaveRequestDto;
import com.hipmap.domain.like.dto.LikeUpdateRequestDto;
import com.hipmap.domain.like.dto.LikeUpdateResponseDto;

public interface LikeService {
    Long create(LikeSaveRequestDto dto);
    LikeUpdateResponseDto update(Long userId, LikeUpdateRequestDto dto);
}
