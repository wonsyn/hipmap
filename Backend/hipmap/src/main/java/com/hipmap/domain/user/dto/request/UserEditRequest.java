package com.hipmap.domain.user.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserEditRequest {
    String nickname;
    String label;
    boolean followPrivate;
}
