package com.hipmap.domain.comment.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class GetCommentResponse {

    private Long commentId;
    private String content;
    private Long group;
    private Long sequence;
    private LocalDateTime createTime;
    private String userNickname;
    private Long userId;

}
