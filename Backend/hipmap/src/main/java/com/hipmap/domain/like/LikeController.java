package com.hipmap.domain.like;

import com.hipmap.domain.like.dto.LikeSaveRequestDto;
import com.hipmap.domain.like.dto.LikeUpdateRequestDto;
import com.hipmap.domain.like.dto.LikeUpdateResponseDto;
import com.hipmap.domain.shorts.ShortsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("like")
@RequiredArgsConstructor
@Api(tags = {"좋아요 API"})
public class LikeController {

    private final LikeService likeService;

    @PostMapping("isLike")
    @ApiOperation(value = "좋아요 추가", notes = "새로운 shorts에 좋아요를 추가한다.")
    public ResponseEntity<?> create(@RequestBody LikeSaveRequestDto dto){
        Map<String, Object> result = new HashMap<>();
        result.put("like_count", likeService.create(dto));
        return ResponseEntity.ok().body(result);
    }

    @PutMapping("isLike")
    @ApiOperation(value = "좋아요 변경", notes = "해당 shorts의 좋아요 상태를 반전시킨다.")
    public ResponseEntity<LikeUpdateResponseDto> update(@RequestBody LikeUpdateRequestDto dto) {
        Long userId = 1L;
        return ResponseEntity.status(HttpStatus.OK).body(likeService.update(userId, dto));
    }

    @DeleteMapping
    @ApiOperation(value = "좋아요 삭제", notes = "로그인 유저와 요청 shortsId의 데이터로 좋아요를 삭제한다.")
    public ResponseEntity<Long> delete(@RequestParam Long shortsId) {
        Long userId = 1L;
        return ResponseEntity.status(HttpStatus.OK).body(likeService.delete(userId, shortsId));
    }

}