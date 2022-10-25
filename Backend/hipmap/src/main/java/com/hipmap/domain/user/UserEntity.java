package com.hipmap.domain.user;



import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name="user")
@Getter
@Setter
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

}
