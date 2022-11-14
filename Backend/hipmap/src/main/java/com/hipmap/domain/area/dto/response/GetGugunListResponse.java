package com.hipmap.domain.area.dto.response;

import com.hipmap.domain.area.GugunEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@ApiModel(value = "구/군 요청 응답 객체", description = "구/군 조회시 나온 결과 리스트를 리턴하는 객체")
public class GetGugunListResponse {
    @ApiModelProperty(value = "구/군 리스트")
    List<GetGugunResponse> gugunList;

    public GetGugunListResponse(List<GugunEntity> list) {
        gugunList = new ArrayList<>();
        for(GugunEntity g : list) {
            gugunList.add(GetGugunResponse.builder()
                    .sido(g.getSido())
                    .gugun(g.getGugun())
                    .code(g.getCode())
                    .build());
        }
    }
}
