package com.hipmap.domain.shorts;

import com.hipmap.domain.bookmark.BookmarkEntity;
import com.hipmap.domain.comment.CommentEntity;
import com.hipmap.domain.like.LikeEntity;
import com.hipmap.domain.user.UserEntity;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name="shorts")
@Getter
@Setter
public class ShortsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shortsId;

    @Builder
    public ShortsEntity(Long shortsId, String fileSrc, String videoSrc, String thumbnailSrc, String locationSi, String locationGu, String locationDong, Boolean isMapped, String labelName, Double latitude, Double longitude, LocalDateTime createTime, UserEntity user, FileType fileType) {
        this.shortsId = shortsId;
        this.fileSrc = fileSrc;
        this.thumbnailSrc = thumbnailSrc;
        this.locationSi = locationSi;
        this.locationGu = locationGu;
        this.locationDong = locationDong;
        this.isMapped = isMapped;
        this.labelName = labelName;
        this.latitude = latitude;
        this.longitude = longitude;
        this.createTime = createTime;
        this.user = user;
        this.fileType = fileType;
    }

    @Lob
    private String fileSrc;

    @Lob
    private String thumbnailSrc;

    private String locationSi;

    private String locationGu;

    private String locationDong;

    private Boolean isMapped;

    private String labelName;

    private Double latitude;

    private Double longitude;

    private LocalDateTime createTime;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private UserEntity user;

    @OneToMany(mappedBy = "shorts", cascade = CascadeType.ALL)
    private List<CommentEntity> comments = new ArrayList<>();

    @OneToMany(mappedBy = "shorts", cascade = CascadeType.ALL)
    private List<LikeEntity> likes = new ArrayList<>();

    @OneToMany(mappedBy = "shorts", cascade = CascadeType.ALL)
    private List<BookmarkEntity> bookmarks = new ArrayList<>();

    public ShortsEntity() {

    }

    @Enumerated(EnumType.STRING)
    private FileType fileType;
}
