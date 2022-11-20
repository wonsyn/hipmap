package com.hipmap.domain.area;

import com.hipmap.domain.area.dto.response.GetSidoListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SidoService {
    private final SidoRepository sidoRepository;

    public GetSidoListResponse getSido() {
        return new GetSidoListResponse(sidoRepository.findAll());
    }
}
