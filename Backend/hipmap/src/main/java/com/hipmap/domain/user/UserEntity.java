package com.hipmap.domain.user;



import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name="user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String username;

    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String userEmail;

    private String nickname;

    @Lob
    private String proImgSrc;

    private String labelName;

    @Lob
    private String labelCharSrc;

    private Boolean role;

    private Boolean followPrivate;

    public UserEntity(String nickname, String userEmail, String proImgSrc) {
        this.nickname = nickname;
        this.userEmail = userEmail;
        this.proImgSrc = proImgSrc;
    }

    public UserEntity update(String name, String picture) {
        this.nickname = name;
        this.proImgSrc = picture;

        return this;
    }
}
