package com.hipmap.domain.shorts.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
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
