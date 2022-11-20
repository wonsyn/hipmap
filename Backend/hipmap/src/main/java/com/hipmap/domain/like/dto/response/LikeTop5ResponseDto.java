package com.hipmap.domain.like.dto.response;


import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Lob;

@Data
@AllArgsConstructor
public class LikeTop5ResponseDto {
    private Long shortsId;
    private Long likeCnt;
    @Lob
    private String thumbnailSrc;
}
