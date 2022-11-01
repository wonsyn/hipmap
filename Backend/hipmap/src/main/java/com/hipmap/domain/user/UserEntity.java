package com.hipmap.domain.user;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;


@Entity
@Table(name="user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String username;

    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String email;

    private String nickname;

    @Lob
    private String proImgSrc;

    private String labelName;

    @Lob
    private String labelCharSrc;

    private Boolean followPrivate;

    public UserEntity(String nickname, String userEmail, String proImgSrc) {
        this.nickname = nickname;
        this.email = userEmail;
        this.proImgSrc = proImgSrc;
    }

    public void updateInfo(String nickname, String labelName, boolean followPrivate) {
        this.nickname = nickname;
        this.labelName = labelName;
        this.followPrivate = followPrivate;
    }

    public void updateProfileImg(String proImgSrc, String labelName, boolean followPrivate) {
        this.proImgSrc = proImgSrc;
    }

    @Enumerated(EnumType.STRING)
    private Admin role;
}
