package com.hipmap.domain.jwt.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReIssueRequest {
    String refreshToken;
}
