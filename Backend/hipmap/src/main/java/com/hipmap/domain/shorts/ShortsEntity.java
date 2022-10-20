package com.hipmap.domain.shorts;

import com.hipmap.domain.user.UserEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="shorts")
@Getter
@Setter
public class ShortsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shortsId;

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
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private UserEntity user;

}
