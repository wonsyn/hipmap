package com.hipmap.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class KakaoResponseDto {
    private Long id;

    private String name;

    private String email;
    private String picture;
    private String role = "ROLE_USER";

    public KakaoResponseDto(String name, String email, String picture) {
        this.name = name;
        this.email = email;
        this.picture = picture;
    }

    public KakaoResponseDto update(String name, String picture) {
        this.name = name;
        this.picture = picture;

        return this;
    }
}
