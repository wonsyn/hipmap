package com.hipmap.domain.comment.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CommentListResponse<T> {

    private T comments;

}
