package com.hipmap.domain.area;

import com.hipmap.domain.area.dto.response.GetDongListResponse;
import com.hipmap.domain.area.dto.response.GetGugunListResponse;
import com.hipmap.domain.area.dto.response.GetSidoListResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/area")
@Api(tags = {"지역코드"})
public class AreaController {
    private final SidoService sidoService;
    private final GugunService gugunService;
    private final DongService dongService;

    @GetMapping("/sido")
    @ApiOperation(value = "시도코드 조회", notes = "전국 시도의 지역코드를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public GetSidoListResponse getSido() {
        return sidoService.getSido();
    }

    @GetMapping("/gugun")
    @ApiOperation(value = "구군코드 조회", notes = "전국 구군의 지역코드를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 400, message = "잘못된 코드요청"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public GetGugunListResponse getGugun(@RequestParam String sido) {
        return gugunService.getGugun(sido);
    }

    @GetMapping("/dong")
    @ApiOperation(value = "동코드 조회", notes = "전국 동의 지역코드를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 400, message = "잘못된 코드요청"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public GetDongListResponse getDong(@RequestParam String gugun) {
        return dongService.getDong(gugun);
    }
}
