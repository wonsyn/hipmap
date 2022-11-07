package com.hipmap.domain.shorts;

import com.hipmap.domain.like.LikeEntity;
import com.hipmap.domain.like.LikeService;
import com.hipmap.domain.like.dto.LikeTop5ResponseDto;
import com.hipmap.domain.shorts.request.CreateShortsRequest;
import com.hipmap.domain.shorts.request.GetMapListFilterRequest;
import com.hipmap.domain.shorts.response.*;
import com.hipmap.global.util.JwtUtil;
import com.querydsl.core.Tuple;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/shorts")
@RequiredArgsConstructor
public class ShortsController {

    private final LikeService likeService;

    private final JwtUtil jwtUtil;
    @Autowired
    ShortsService shortsService;

    @Autowired
    ShortsRepositorySupport shortsRepositorySupport;
    @GetMapping()
    @ApiOperation(value = "쇼츠 조회 - 위 아래로 넘기기", notes = "pagenation으로 10개씩 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<?> getShorts(@PageableDefault(size = 10)Pageable pageable) {
        Page<ShortsResponse> shorts = shortsService.getShorts(pageable);
        return new ResponseEntity<>(new ShortsPageListResponse<>(shorts.getTotalPages(), shorts.getContent()), HttpStatus.OK);
    }
    @GetMapping("/v2")
    @ApiOperation(value = "쇼츠 조회 version2", notes = "pagenation으로 10개씩 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<?> getShortsRandom(@PageableDefault(size = 10)Pageable pageable) {
        Page<ShortsResponse> shorts = shortsService.getShorts(pageable);
        return new ResponseEntity<>(new ShortsPageListResponse<>(shorts.getTotalPages(), shorts.getContent()), HttpStatus.OK);
    }

    @GetMapping("{shortsId}")
    @ApiOperation(value = "쇼츠 상세 조회", notes = "shortId를 이용해 쇼츠 정보 상세 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<?> getShortsInfoById(@PathVariable Long shortsId) {

        return new ResponseEntity<>(shortsService.getShortsInfoByShortsId(shortsId), HttpStatus.OK);
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

    public ResponseEntity<?> getShortsCountByUser(@RequestParam String username) {
        return new ResponseEntity<>(shortsService.getShortsCountByUsername(username), HttpStatus.OK);
    }

    @GetMapping("/maplist")
    @ApiOperation(value = "지도 내 게시물 조회", notes = "같은 레이블과 설정된 지역으로 필터링된 지도 상에 띄울 게시물 조회 ")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<?> getShortsOnLabelAndLocation(@RequestBody @Valid GetMapListFilterRequest request, HttpServletRequest httpRequest) {

        Long userId = jwtUtil.getUserInfo(httpRequest.getHeader("accessToken")).getId();

        return new ResponseEntity<>(new ShortsListResponse(shortsService.getShortsByLabelAndLocation(userId, request)), HttpStatus.OK);

    }

    @DeleteMapping("/delete/{shortsId}")
    @Transactional
    @ApiOperation(value = "쇼츠 삭제", notes = "내가 업로든 한 쇼츠 삭제 api")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<Long> deleteShorts(@PathVariable Long shortsId, HttpServletRequest httpRequest) {
        Long userId = jwtUtil.getUserInfo(httpRequest.getHeader("accessToken")).getId();
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
    public ResponseEntity<Long> uploadFile(
            @RequestPart(value = "file") MultipartFile file,
            @RequestPart(value = "CreateShortsRequest") CreateShortsRequest request,
            HttpServletRequest httpRequest) throws Exception {
        Long userId = jwtUtil.getUserInfo(httpRequest.getHeader("accessToken")).getId();
        return ResponseEntity.status(HttpStatus.OK).body(shortsService.uploadFile(file, request,userId));
    }

    @GetMapping("/mainBest")
    @ApiOperation(value = "좋아요 top5 게시물 조회", notes = "좋아요 순위 상위 5개 쇼츠 게시물을 조회합니다. ")
    public ResponseEntity<ShortsListResponse> shortsTop5() {
        // Like 테이블에서 shorts_id로 그룹바이해서 sum한 값 select하고, 이때 orderBy sum 으로 탑5의 ShortsEntity 가져와서 반환
        List<ShortsIdAndLikeCntProjectionInterface> shortsIdAndLikeCntProjectionInterfaces = likeService.shortsTop5ByCountLike();
        List<LikeTop5ResponseDto> collect = shortsIdAndLikeCntProjectionInterfaces.stream()
                .map(m -> new LikeTop5ResponseDto(m.getShortsId(), m.getLikeCnt(), shortsService.getThumbnail(m)))
                .collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(new ShortsListResponse(collect));
    }

    @GetMapping("/updateMapped") // 삭제예정
    public void updateIsMapped() throws Exception {
//        shortsService.updateMappedStates();
//        shortsRepositorySupport.getShortsToUpdate();
//        shortsService.updateMappedStates();
//        return ResponseEntity.status(HttpStatus.OK).body("성공");
    }
}
