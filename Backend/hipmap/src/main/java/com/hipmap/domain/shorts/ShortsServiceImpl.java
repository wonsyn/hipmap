package com.hipmap.domain.shorts;

import com.hipmap.domain.shorts.request.GetMapListFilterRequest;
import com.hipmap.domain.shorts.response.GetShortsByLabelResponse;
import com.hipmap.domain.shorts.response.ShortsListEachUserResponse;
import com.hipmap.domain.shorts.response.ShortsResDto;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import com.hipmap.domain.user.UserEntity;
import com.hipmap.domain.user.UserRepository;
import com.hipmap.global.util.S3Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class ShortsServiceImpl implements ShortsService{

    @Autowired
    ShortsRepository shortsRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ShortsRepositorySupport shortsRepositorySupport;

    @Autowired
    private S3Util s3Uploader;

    @Override
    public Page<ShortsResDto> getShorts(Pageable pageable) {
        Page<ShortsEntity> shortsEntities =  shortsRepository.findAll(pageable);
        Page<ShortsResDto> boardDtoList = shortsEntities.map(m -> ShortsResDto.builder()
                .shortsId(m.getShortsId())
                .fileSrc(m.getFileSrc())
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
    public List<GetShortsByLabelResponse> getShortsByLabelAndLocation(Long userId, GetMapListFilterRequest request) {
        Optional<UserEntity> user = userRepository.findById(userId);
        if(user.isPresent()){
            String lableName =user.get().getLabelName();
            List<ShortsEntity> shortsEntities = shortsRepositorySupport.getShortsEntityByLabelAndLocation(lableName,request);
            List<GetShortsByLabelResponse> boardDtoList = shortsEntities.stream().map(m -> GetShortsByLabelResponse.builder()
                    .shortsId(m.getShortsId())
                    .thumbnailSrc(m.getThumbnailSrc())
                    .build()).collect(Collectors.toList());
            return boardDtoList;
        }else throw new RuntimeException("존재하지 않는 유저입니다");


    }

    @Override
    public Long getShortsCountByUsername(String username) {
        return shortsRepositorySupport.getShortsCountByUsername(username);
    }

    @Override
    public Long deleteShorts(Long userId, Long shortsId) {
        /*
        S3 로직 파악 후 썸네일, 비디오 삭제하는 코드 필요
         */
        Optional<ShortsEntity> shortsEntityOP = shortsRepository.findById(shortsId);
        if(shortsEntityOP.isPresent()) {
            return shortsRepository.deleteByShortsId(shortsId);
        }else {
            throw new IllegalStateException("존재하지 않는 shorts입니다.");
        }
    }

    @Override
    public List<ShortsListEachUserResponse> getUserContents(String username) {
        UserEntity userEntityOp = userRepository.findByUsername(username).orElseThrow(UserNotFoundException::new);
        List<ShortsEntity> shortsEntityList = shortsRepository.findAllByUser(userEntityOp);
        List<ShortsListEachUserResponse> shortsDtoList = shortsEntityList.stream().map(m -> ShortsListEachUserResponse.builder()
                .shortsId(m.getShortsId())
                .thumbnailSrc(m.getThumbnailSrc())
                .build()).collect(Collectors.toList());


        return shortsDtoList;
    }

    @Override
    @Transactional
    public Long uploadFile(MultipartFile file, ShortsEntity shortsEntity) throws Exception {
        if(!file.isEmpty()) {
            String storedFileName = s3Uploader.upload(file,"images");
            shortsEntity.setFileSrc(storedFileName);
        }
        ShortsEntity shortsEntityForSave = shortsRepository.save(shortsEntity);
        return shortsEntityForSave.getShortsId();
    }
}
