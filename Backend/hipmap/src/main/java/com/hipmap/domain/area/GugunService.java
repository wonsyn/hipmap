package com.hipmap.domain.area;

import com.hipmap.domain.area.dto.response.GetGugunListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GugunService {
    private final GugunRepository gugunRepository;

    public GetGugunListResponse getGugun(String sido) {
        return new GetGugunListResponse(gugunRepository.findByCodeStartsWith(sido));
    }
}
