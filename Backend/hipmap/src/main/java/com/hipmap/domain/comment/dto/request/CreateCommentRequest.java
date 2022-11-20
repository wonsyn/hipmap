package com.hipmap.domain.comment.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateCommentRequest {
    private String content;
    private Long group;
    private Long sequence;

}
