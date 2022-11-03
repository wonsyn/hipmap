package com.hipmap.domain.like;

import com.hipmap.domain.like.dto.LikeUpdateRequestDto;
import com.hipmap.domain.like.dto.LikeUpdateResponseDto;
import com.hipmap.global.util.JwtUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("like")
@RequiredArgsConstructor
@Api(tags = {"좋아요 API"})
public class LikeController {

    private final LikeService likeService;
    private final LikeRepositorySupport likeRepositorySupport;
    private final JwtUtil jwtUtil;

    @PostMapping("isLike")
    @ApiOperation(value = "좋아요 추가", notes = "새로운 shorts에 좋아요를 추가한다.")
    public ResponseEntity<?> create(@RequestBody LikeUpdateRequestDto dto, HttpServletRequest request){
        Long userId = jwtUtil.getUserInfo(request.getHeader("accessToken")).getId();
        Map<String, Object> result = new HashMap<>();

        result.put("like_count", likeService.create(userId, dto.getShortsId(), dto.getVote()));
        return ResponseEntity.ok().body(result);
    }

    @PutMapping("isLike")
    @ApiOperation(value = "좋아요 변경", notes = "해당 shorts의 좋아요 상태를 반전시킨다.")
    public ResponseEntity<LikeUpdateResponseDto> update(@RequestBody LikeUpdateRequestDto dto, HttpServletRequest request) {
        Long userId = jwtUtil.getUserInfo(request.getHeader("accessToken")).getId();

        return ResponseEntity.status(HttpStatus.OK).body(likeService.update(userId, dto.getShortsId(), dto.getVote()));
    }

    @DeleteMapping
    @ApiOperation(value = "좋아요 삭제", notes = "로그인 유저와 요청 shortsId의 데이터로 좋아요를 삭제한다.")
    public ResponseEntity<Map<String, Long>> delete(@RequestParam Long shortsId, HttpServletRequest request) {
        Long userId = jwtUtil.getUserInfo(request.getHeader("accessToken")).getId();
        Map<String, Long> result = new HashMap<>();
        result.put("like_count",likeService.delete(userId, shortsId));
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping // 테스트용 삭제해야함
    public Long getLikes(@RequestParam Long shortsId){
        return likeRepositorySupport.countLikeByShortsId(shortsId);
    }
}