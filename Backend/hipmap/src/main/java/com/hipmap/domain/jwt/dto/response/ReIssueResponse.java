package com.hipmap.domain.jwt.dto.response;

import lombok.Builder;
import lombok.Data;

import java.util.Map;

@Data
@Builder
public class ReIssueResponse {
    String message;
    Map<String, String> tokens;
    Long expireMilliSec;
}
