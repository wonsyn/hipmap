package com.hipmap.domain.bookmark.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CreateBookmarkResponse {
    private Long bookmarkId;
    private Long userId;
    private Long shortsId;
}
