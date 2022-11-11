package com.hipmap.domain.like;

import com.hipmap.domain.like.dto.response.LikeUpdateResponseDto;
import com.hipmap.domain.shorts.dto.response.ShortsIdAndLikeCntProjectionInterface;

import java.util.List;

public interface LikeService {
    Long create(Long userId, Long shortsId, Boolean vote);

    LikeUpdateResponseDto update(Long userId, Long shortsId,Boolean vote);

    Long delete(Long userId, Long shortsId);

    List<ShortsIdAndLikeCntProjectionInterface> shortsTop5ByCountLike();

}
