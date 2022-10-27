package com.hipmap.domain.shorts;

import com.hipmap.domain.shorts.response.GetShortsByLabelResponse;
import com.hipmap.domain.shorts.response.ShortsResDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class ShortsServiceImpl implements ShortsService{

    @Autowired
    ShortsRepository shortsRepository;

    @Autowired
    ShortsRepositorySupport shortsRepositorySupport;

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

    @Override
    public List<GetShortsByLabelResponse> getShortsByLabel(String labeling) {
        List<ShortsEntity> shortsEntities = shortsRepositorySupport.getShortsEntityByLabel(labeling);
        List<GetShortsByLabelResponse> boardDtoList = shortsEntities.stream().map(m -> GetShortsByLabelResponse.builder()
                .shortsId(m.getShortsId())
                .thumbnailSrc(m.getThumbnailSrc())
                .build()).collect(Collectors.toList());
        return boardDtoList;

    }

    @Override
    public Long getShortsCountByUsername(String username) {
        return shortsRepositorySupport.getShortsCountByUsername(username);
    }


}
