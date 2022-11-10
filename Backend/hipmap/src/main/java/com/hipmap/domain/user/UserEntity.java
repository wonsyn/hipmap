package com.hipmap.domain.user;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.hipmap.domain.bookmark.BookmarkEntity;
import com.hipmap.domain.comment.CommentEntity;
import com.hipmap.domain.follow.FollowEntity;
import com.hipmap.domain.like.LikeEntity;
import com.hipmap.domain.notification.NotificationEntity;
import com.hipmap.domain.shorts.ShortsEntity;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


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

    private Boolean isCerted;

    private LocalDateTime regDateTime;

    @Enumerated(EnumType.STRING)
    private Admin role;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<FollowEntity> followings = new ArrayList<>();

    @OneToMany(mappedBy = "followingUser", cascade = CascadeType.ALL)
    private List<FollowEntity> followers = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<BookmarkEntity> bookmarks = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<CommentEntity> comments = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<LikeEntity> likes = new ArrayList<>();

    @OneToMany(mappedBy = "receiver", cascade = CascadeType.ALL)
    private List<NotificationEntity> notifications = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<ShortsEntity> shorts = new ArrayList<>();

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

    public void updateProfileImg(String proImgSrc) {
        this.proImgSrc = proImgSrc;
    }

    public void auth() {
        this.isCerted = true;
    }
}
