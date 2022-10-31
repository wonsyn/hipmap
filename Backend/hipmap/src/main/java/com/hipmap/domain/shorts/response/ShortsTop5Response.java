package com.hipmap.domain.shorts.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Lob;

@Data
@AllArgsConstructor
public class ShortsTop5Response {

    private Long shortsId;
    @Lob
    private String thumbnail_src;

}
