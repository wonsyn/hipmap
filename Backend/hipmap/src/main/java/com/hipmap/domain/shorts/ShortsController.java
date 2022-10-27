package com.hipmap.domain.shorts;

import com.hipmap.domain.shorts.response.ShortsListResponse;
import com.hipmap.domain.shorts.response.ShortsResDto;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/shorts")
public class ShortsController {

    @Autowired
    ShortsService shortsService;

    @GetMapping()
    List<ShortsResDto> getShorts(Pageable pageable) {

        return shortsService.getShorts(pageable).getContent(); // 페이지 객체 어쩌구 : 필요함
    }


    @GetMapping("/samelabel")
    @ApiOperation(value = "레이블 별 쇼츠 조회", notes = "같은 레이블인 사람들이 올린 쇼츠 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })

    public ResponseEntity<?> getShortsByLabel(@RequestParam String labeling) {

        return new ResponseEntity<>(new ShortsListResponse(shortsService.getShortsByLabel(labeling)), HttpStatus.OK);

    }

    @GetMapping("/user/count")
    @ApiOperation(value = "게시물 수 조회", notes = "유저의 게시물 개수 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })

    public ResponseEntity<?> getShortsCountByUser(@RequestParam String username){
        return new ResponseEntity<>(shortsService.getShortsCountByUsername(username),HttpStatus.OK);
    }

}
