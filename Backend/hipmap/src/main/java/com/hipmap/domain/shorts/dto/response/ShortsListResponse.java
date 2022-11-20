package com.hipmap.domain.shorts.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ShortsListResponse<T> {
    private T shortsList;
}
