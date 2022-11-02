package com.hipmap.domain.shorts.response;

import lombok.Builder;
import lombok.Data;

@Data
public class ShortsListEachUserResponse {
    private String thumbnailSrc;
    private Long shortsId;

    @Builder
    public ShortsListEachUserResponse(String thumbnailSrc, Long shortsId) {
        this.thumbnailSrc = thumbnailSrc;
        this.shortsId = shortsId;
    }
}
