package com.hipmap.domain.comment.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class CreateCommentResponse {
    private Long commentId;
    private String content;
    private Long shortsId;
    private Long userId;
    private Long group;
    private Long sequence;
    private LocalDateTime createTime;

}
