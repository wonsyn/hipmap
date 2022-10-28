package com.hipmap.domain.user;

import com.hipmap.domain.user.dto.EmailRequestDto;

public interface UserService {
    void authEmail(EmailRequestDto request);
}
