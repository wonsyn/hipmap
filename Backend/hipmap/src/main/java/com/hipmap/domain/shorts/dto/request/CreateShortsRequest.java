package com.hipmap.domain.shorts.dto.request;

import com.hipmap.domain.shorts.FileType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateShortsRequest {
    private String locationSi;
    private String locationGu;
    private String locationDong;
    private Double latitude;
    private Double longitude;
    private FileType fileType;

}
