package com.hipmap.domain.shorts.response;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
public class ShortsResDto implements Serializable {

    @ApiModelProperty(name = "쇼츠 id", example = "2")
    Long shortsId;

    @ApiModelProperty(name = "이미지 주소", example = "주소")
    String imgSrc;

    @ApiModelProperty(name = "비디오 주소", example = "주소")
    String videoSrc;

    @ApiModelProperty(name = "썸네일 주소", example = "주소")
    String thumbnailSrc;

    @ApiModelProperty(name = "위치 시", example = "서울시")
    String locationSi;

    @ApiModelProperty(name = "위치 군/구", example = "동작구")
    String locationGu;

    @ApiModelProperty(name = "위치 동", example = "풍무동")
    String locationDong;

    @ApiModelProperty(name = "지도표시여부", example = "false")
    Boolean isMapped;

    @ApiModelProperty(name = "레이블링", example = "보헤미안 힙스터")
    String labelName;

    @ApiModelProperty(name = "위도", example = "2")
    Double latitude;

    @ApiModelProperty(name = "경도", example = "2")
    Double longitude;

    @ApiModelProperty(name = "생성일시", example = "2022-02-21")
    LocalDateTime createTime;

    @ApiModelProperty(name = "유저 id", example = "1")
    Long userId;

    @Builder
    public ShortsResDto(Long shortsId, String imgSrc, String videoSrc, String thumbnailSrc, String locationSi, String locationGu, String locationDong, Boolean isMapped, String labelName, Double latitude, Double longitude, LocalDateTime createTime, Long userId) {
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
        this.userId = userId;
    }
}
