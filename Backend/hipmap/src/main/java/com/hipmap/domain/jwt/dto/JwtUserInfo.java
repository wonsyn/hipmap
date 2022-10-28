package com.hipmap.domain.jwt.dto;

import com.hipmap.domain.user.Admin;
import com.hipmap.domain.user.UserEntity;
import lombok.Builder;
import lombok.Data;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Builder
@Data
public class JwtUserInfo {
    Long id;
    String username;
    String email;
    String nickname;
    String label_name;

    @Enumerated(EnumType.STRING)
    Admin role;

    public UserEntity toEntity() {
        return UserEntity.builder()
                .userId(id)
                .username(username)
                .userEmail(email)
                .labelName(label_name)
                .admin(role)
                .build();
    }
}
