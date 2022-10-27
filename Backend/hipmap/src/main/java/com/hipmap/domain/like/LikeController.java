package com.hipmap.domain.like;

import com.hipmap.domain.like.dto.LikeSaveRequestDto;
import com.hipmap.domain.shorts.ShortsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
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
    private final ShortsService shortsService;

    @PostMapping("isLike")
    @ApiOperation(value = "좋아요 추가", notes = "새로운 shorts에 좋아요를 추가한다.")
    public ResponseEntity<?> create(@RequestBody LikeSaveRequestDto dto){
        Map<String, Object> result = new HashMap<>();
        result.put("like_count", likeService.create(dto));
        return ResponseEntity.ok().body(result);
    }
