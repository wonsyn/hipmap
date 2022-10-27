package com.hipmap.domain.comment;

import com.hipmap.domain.comment.request.CreateCommentRequest;
import com.hipmap.domain.comment.request.UpdateCommentRequest;
import com.hipmap.domain.comment.response.CommentListResponse;
import com.hipmap.domain.comment.response.CreateCommentResponse;
import com.hipmap.domain.common.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Api(value = "댓글 API", tags = {"Comment"})
@RestController
@RequestMapping("/hip/comment")
@RequiredArgsConstructor
public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping("/{shortsId}/write")
    @ApiOperation(value = "댓글 작성", notes = "쇼츠에 댓글 작성")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<?> createComment(@PathVariable Long shortsId, @RequestBody @Valid CreateCommentRequest request){
        Long userId = Long.valueOf(1); // authentication 생기면 수정

        CommentEntity comment = commentService.createComment(userId,shortsId,request);
        return new ResponseEntity<CreateCommentResponse>(
                new CreateCommentResponse(
                        comment.getCommentId(),
                        comment.getContent(),
                        comment.getShorts().getShortsId(),
                        comment.getUser().getUserId(),
                        comment.getCommentGroup(),
                        comment.getSequence(),
                        comment.getCreateTime()), HttpStatus.OK);
    }

    @GetMapping("/{shortsId}")
    @ApiOperation(value = "댓글 조회", notes = "쇼츠별 북마크 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<?> getCommentsByShorts(@PathVariable Long shortsId){
     /*
     authentication 생기면 수정
      */
        return new ResponseEntity<>(new CommentListResponse(commentService.findCommentsByShortsId(shortsId)), HttpStatus.OK);
    }

    @PutMapping("/{shortsId}/{commentId}")
    @ApiOperation(value = "댓글 수정", notes = "댓글 내용 수정")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<?> updateComment(@PathVariable Long shortsId, @PathVariable Long commentId, @RequestBody @Valid UpdateCommentRequest request){
        Long userId = Long.valueOf(1); // authentication 생기면 수정

        CommentEntity comment = commentService.updateComment(userId,commentId,request);

        return new ResponseEntity<CreateCommentResponse>(
                new CreateCommentResponse(
                        comment.getCommentId(),
                        comment.getContent(),
                        comment.getShorts().getShortsId(),
                        comment.getUser().getUserId(),
                        comment.getCommentGroup(),
                        comment.getSequence(),
                        comment.getCreateTime()), HttpStatus.OK);
    }

    @DeleteMapping("/{shortsId}/{commentId}")
    @ApiOperation(value = "댓글 삭제", notes = "댓글 삭제")

    public BaseResponseBody deleteComment(@RequestParam Long commentId){
        Long userId = Long.valueOf(1); // user 생기면 수정
        commentService.deleteComment(userId,commentId);
        return BaseResponseBody.of(200, "Success");
    }

}
