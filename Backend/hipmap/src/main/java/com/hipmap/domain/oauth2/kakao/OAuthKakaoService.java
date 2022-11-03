package com.hipmap.domain.oauth2.kakao;

import com.hipmap.domain.oauth2.kakao.dto.response.KakaoAuthResponse;

public interface OAuthKakaoService {
    KakaoAuthResponse auth(String code);
}
