package com.hipmap.domain.shorts;

import com.hipmap.domain.shorts.response.GetShortsByLabelResponse;
import com.hipmap.domain.shorts.response.ShortsResDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface ShortsService {

    Page<ShortsResDto> getShorts(Pageable pageable);

    List<GetShortsByLabelResponse> getShortsByLabel(String labeling);

    Long getShortsCountByUsername(String username);
}
