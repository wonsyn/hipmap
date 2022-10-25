package com.hipmap.domain.shorts;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface ShortsService {

    Page<ShortsResDto> getShorts(Pageable pageable);
}
