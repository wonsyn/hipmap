package com.hipmap.domain.like;

import com.hipmap.domain.like.dto.LikeSaveRequestDto;

public interface LikeService {
    Long create(LikeSaveRequestDto dto);
}
