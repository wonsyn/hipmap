package com.hipmap.domain.shorts;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hipmap.domain.user.UserEntity;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    public ShortsEntity(Long shortsId, String imgSrc, String videoSrc, String thumbnailSrc, String locationSi, String locationGu, String locationDong, Boolean isMapped, String labelName, Double latitude, Double longitude, LocalDateTime createTime, UserEntity user) {
        this.shortsId = shortsId;
        this.imgSrc = imgSrc;
        this.videoSrc = videoSrc;
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
    }

    @Lob
    private String imgSrc;

    @Lob
    private String videoSrc;

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

    public ShortsEntity() {

    }
}
