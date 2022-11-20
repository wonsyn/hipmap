package com.hipmap.domain.area;

import com.hipmap.domain.area.dto.response.GetDongListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DongService {
    private final DongRepository dongRepository;

    public GetDongListResponse getDong(String gugun) {
        return new GetDongListResponse(dongRepository.findByCodeStartsWith(gugun));
    }
}
