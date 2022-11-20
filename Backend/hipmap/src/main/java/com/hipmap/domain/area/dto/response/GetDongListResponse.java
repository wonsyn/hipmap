package com.hipmap.domain.area.dto.response;

import com.hipmap.domain.area.DongEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@ApiModel(value = "동 요청 응답 객체", description = "동 조회시 나온 결과 리스트를 리턴하는 객체")
public class GetDongListResponse {
    @ApiModelProperty(value = "동 리스트")
    List<GetDongResponse> dongList;

    public GetDongListResponse(List<DongEntity> list) {
        dongList = new ArrayList<>();
        for(DongEntity d : list) {
            dongList.add(GetDongResponse.builder()
                    .sido(d.getSido())
                    .gugun(d.getGugun())
                    .dong(d.getDong())
                    .code(d.getCode())
                    .build());
        }
    }
}
