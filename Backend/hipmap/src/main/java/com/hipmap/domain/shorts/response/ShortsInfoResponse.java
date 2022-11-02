package com.hipmap.domain.shorts.response;

import com.hipmap.domain.shorts.FileType;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ShortsInfoResponse {

    @ApiModelProperty(name = "쇼츠 id", example = "2")
    Long shortsId;

    @ApiModelProperty(name = "파일 주소", example = "주소")
    String fileSrc;

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

    @ApiModelProperty(name = "파일 타입", example = "video")
    FileType fileType;

    @Builder
    public ShortsInfoResponse(Long shortsId, String fileSrc, String thumbnailSrc, String locationSi, String locationGu, String locationDong, Boolean isMapped, String labelName, Double latitude, Double longitude, LocalDateTime createTime, Long userId, FileType fileType) {
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
        this.userId = userId;
        this.fileType = fileType;
    }
}
