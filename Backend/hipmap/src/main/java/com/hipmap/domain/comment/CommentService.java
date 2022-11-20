package com.hipmap.domain.comment;

import com.hipmap.domain.comment.dto.request.CreateCommentRequest;
import com.hipmap.domain.comment.dto.request.UpdateCommentRequest;
import com.hipmap.domain.comment.dto.response.GetCommentResponse;

import java.util.List;

public interface CommentService {

    CommentEntity createComment(Long userId, Long shortsId, CreateCommentRequest request);

    CommentEntity updateComment(Long shortsId,  Long commentId, UpdateCommentRequest request);
    List<GetCommentResponse> findCommentsByShortsId(Long shortsId);

    void deleteComment(Long userId, Long shortsId);

}
