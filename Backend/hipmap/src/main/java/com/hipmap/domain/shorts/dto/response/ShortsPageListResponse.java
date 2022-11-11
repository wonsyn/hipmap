package com.hipmap.domain.shorts.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ShortsPageListResponse<T>{
    private int totalPage;
    private T shortsList;
}
