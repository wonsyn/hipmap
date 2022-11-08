package com.hipmap.domain.shorts.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetShortsByLabelAndLocResponse {

    private String thumbnailSrc;
    private Long shortsId;
    private double latitude;
    private double longitude;

    @Builder
    public GetShortsByLabelAndLocResponse(String thumbnailSrc, Long shortsId, double latitude, double longitude) {
        this.thumbnailSrc = thumbnailSrc;
        this.shortsId = shortsId;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
