package com.hipmap.domain.shorts.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
public class GetShortsByLabelResponse {
    private String thumbnailSrc;
    private Long shortsId;

    @Builder
    public GetShortsByLabelResponse(Long shortsId,String thumbnailSrc) {
        this.thumbnailSrc = thumbnailSrc;
        this.shortsId = shortsId;
    }
}
