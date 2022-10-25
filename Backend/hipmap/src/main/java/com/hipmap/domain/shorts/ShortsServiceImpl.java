package com.hipmap.domain.shorts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;



@Service
public class ShortsServiceImpl implements ShortsService{

    @Autowired
    ShortsRepository shortsRepository;


    @Override
    public Page<ShortsResDto> getShorts(Pageable pageable) {
        Page<ShortsEntity> shortsEntities =  shortsRepository.findAll(pageable);
        Page<ShortsResDto> boardDtoList = shortsEntities.map(m -> ShortsResDto.builder()
                .shortsId(m.getShortsId())
                .imgSrc(m.getImgSrc())
                .videoSrc(m.getVideoSrc())
                .thumbnailSrc(m.getThumbnailSrc())
                .locationSi(m.getLocationSi())
                .locationGu(m.getLocationGu())
                .locationDong(m.getLocationDong())
                .isMapped(m.getIsMapped())
                .labelName(m.getLabelName())
                .latitude(m.getLatitude())
                .longitude(m.getLongitude())
                .createTime(m.getCreateTime())
                .userId(m.getUser().getUserId())
                .build());
        return boardDtoList;
//        return shortsRepository.findAll(pageable);
    }


}
