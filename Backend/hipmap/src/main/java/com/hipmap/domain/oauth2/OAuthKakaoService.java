package com.hipmap.domain.oauth2;

import java.util.Map;

public interface OAuthKakaoService {
    Map<String, String> auth(String code);
}
