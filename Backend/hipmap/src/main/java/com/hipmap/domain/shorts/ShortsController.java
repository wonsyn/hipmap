package com.hipmap.domain.shorts;

import com.hipmap.domain.shorts.request.GetMapListFilterRequest;
import com.hipmap.domain.shorts.response.ShortsListEachUserResponse;
import com.hipmap.domain.shorts.response.ShortsListResponse;
import com.hipmap.domain.shorts.response.ShortsResDto;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/shorts")
public class ShortsController {

    @Autowired
    ShortsService shortsService;

    @GetMapping()
    @ApiOperation(value = "쇼츠 조회 - 위 아래로 넘기기", notes = "pagenation으로 10개씩 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
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

    @GetMapping("/maplist")
    @ApiOperation(value = "지도 내 게시물 조회", notes = "같은 레이블과 설정된 지역으로 필터링된 지도 상에 띄울 게시물 조회 ")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<?> getShortsOnLabelAndLocation(@RequestBody @Valid GetMapListFilterRequest request) {

        /*
        토큰 생기면 user 같이 넘겨서 레이블링 정보 가져올 예정
         */

        Long userId = Long.valueOf(1);
        return new ResponseEntity<>(new ShortsListResponse(shortsService.getShortsByLabelAndLocation(userId,request)), HttpStatus.OK);

    }

    @DeleteMapping("/delete/{shortsId}")
    @Transactional
    @ApiOperation(value = "쇼츠 삭제", notes = "내가 업로든 한 쇼츠 삭제 api")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<Long> deleteShorts(@PathVariable Long shortsId){
        // 헤더 접근 후 유저 정보 받아오기
        Long userId = Long.valueOf(1);
        return ResponseEntity.status(HttpStatus.OK).body(shortsService.deleteShorts(userId, shortsId));
    }

    @GetMapping("/getusershorts/{username}")
    @ApiOperation(value = " 로그인 유저 및 상대방 유저의 게시물 조회", notes = "username으로 본인 및 상대방의 유저의 썸네일 주소 및 shortsId 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<List<ShortsListEachUserResponse>> getusershorts(@PathVariable String username) {
        return ResponseEntity.status(HttpStatus.OK).body(shortsService.getUserContents(username));
    }

    @PostMapping("/upload")
    public ResponseEntity<Long> uploadFile(MultipartFile file, ShortsEntity shorts) throws Exception{
        return ResponseEntity.status(HttpStatus.OK).body(shortsService.uploadFile(file, shorts));
    }

}
