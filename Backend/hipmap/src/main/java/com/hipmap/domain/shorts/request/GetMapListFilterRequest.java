package com.hipmap.domain.shorts.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GetMapListFilterRequest {
    private double startLat;
    private double endLat;
    private double startLng;
    private double endLng;
    private Boolean isFilterChecked;
    private String locationSi;
    private String locationGu;
    private String locationDong;
}
