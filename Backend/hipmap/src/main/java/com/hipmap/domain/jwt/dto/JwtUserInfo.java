package com.hipmap.domain.jwt.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class JwtUserInfo {
    Long id;
    String username;
}
