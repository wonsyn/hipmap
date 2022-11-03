package com.hipmap.domain.shorts.response;

import com.hipmap.domain.shorts.FileType;
import com.hipmap.domain.shorts.LikeType;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
public class ShortsResponse implements Serializable {

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

    @ApiModelProperty(name = "생성일시", example = "2022-02-21")
    LocalDateTime createTime;

    @ApiModelProperty(name = "좋아요 수", example = "10")
    Long likeCount;

    @ApiModelProperty(name = "싫어요 수", example = "10")
    Long hateCount;

    @ApiModelProperty(name = "댓글 수", example = "10")
    Long commentsCount;

    @ApiModelProperty(name = "좋아요인지", example = "0")
    LikeType isLike;


    @ApiModelProperty(name = "파일 타입", example = "video")
    FileType fileType;

    @Builder
    public ShortsResponse(Long shortsId, String fileSrc, String thumbnailSrc, String locationSi, String locationGu, String locationDong, LocalDateTime createTime, Long likeCount, Long hateCount, Long commentsCount, LikeType isLike, FileType fileType) {
        this.shortsId = shortsId;
        this.fileSrc = fileSrc;
        this.thumbnailSrc = thumbnailSrc;
        this.locationSi = locationSi;
        this.locationGu = locationGu;
        this.locationDong = locationDong;
        this.createTime = createTime;
        this.likeCount = likeCount;
        this.hateCount = hateCount;
        this.commentsCount = commentsCount;
        this.isLike = isLike;
        this.fileType = fileType;
    }

}
