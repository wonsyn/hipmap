package com.hipmap.domain.bookmark.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GetBookmarkResponse {

    private Long shortsId;

    private String thumbnailSrc;

    private String nickname;
}
