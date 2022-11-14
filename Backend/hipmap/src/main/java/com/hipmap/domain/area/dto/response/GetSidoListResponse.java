package com.hipmap.domain.area.dto.response;

import com.hipmap.domain.area.SidoEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@ApiModel(value = "시/도 요청 응답 객체", description = "시/도 조회시 나온 결과 리스트를 리턴하는 객체")
public class GetSidoListResponse {
    @ApiModelProperty(value = "시/도 리스트")
    List<GetSidoResponse> sidoList;

    public GetSidoListResponse(List<SidoEntity> list) {
        sidoList = new ArrayList<>();
        for(SidoEntity s : list) {
            sidoList.add(GetSidoResponse.builder()
                    .sido(s.getSido())
                    .code(s.getCode())
                    .build());
        }
    }
}
