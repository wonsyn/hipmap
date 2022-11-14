package com.hipmap.domain.comment.dto.request;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@JsonAutoDetect
public class UpdateCommentRequest {

    private String content;

    public UpdateCommentRequest() {
    }
}
