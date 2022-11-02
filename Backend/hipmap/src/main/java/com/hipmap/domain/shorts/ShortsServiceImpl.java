package com.hipmap.domain.shorts;

import com.hipmap.domain.like.LikeRepository;
import com.hipmap.domain.shorts.Exception.ShortsNotFoundException;
import com.hipmap.domain.shorts.request.GetMapListFilterRequest;
import com.hipmap.domain.shorts.response.*;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import com.hipmap.domain.user.UserEntity;
import com.hipmap.domain.user.UserRepository;
import com.hipmap.global.util.S3Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class ShortsServiceImpl implements ShortsService {

    @Autowired
    ShortsRepository shortsRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    LikeRepository likeRepository;

    @Autowired
    ShortsRepositorySupport shortsRepositorySupport;

    @Autowired
    private S3Util s3Uploader;

    @Override
    public Page<ShortsResponse> getShorts(Pageable pageable) {
        Page<ShortsEntity> shortsEntities = shortsRepository.findAll(pageable);
        Page<ShortsResponse> boardDtoList = shortsEntities.map(m -> ShortsResponse.builder()
                .shortsId(m.getShortsId())
                .fileSrc(m.getFileSrc())
                .thumbnailSrc(m.getThumbnailSrc())
                .locationSi(m.getLocationSi())
                .locationGu(m.getLocationGu())
                .locationDong(m.getLocationDong())
                .createTime(m.getCreateTime())
//                .likeCount()
//                .hateCount()
//                .commentsCount()
//                .isLike(likeRepository.findByUserAndShorts(m.getShortsId()).isPresent())
                .fileType(m.getFileType())
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
        if (user.isPresent()) {
            String lableName = user.get().getLabelName();
            List<ShortsEntity> shortsEntities = shortsRepositorySupport.getShortsEntityByLabelAndLocation(lableName, request);
            List<GetShortsByLabelResponse> boardDtoList = shortsEntities.stream().map(m -> GetShortsByLabelResponse.builder()
                    .shortsId(m.getShortsId())
                    .thumbnailSrc(m.getThumbnailSrc())
                    .build()).collect(Collectors.toList());
            return boardDtoList;
        } else throw new RuntimeException("존재하지 않는 유저입니다");


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
        if (shortsEntityOP.isPresent()) {
            return shortsRepository.deleteByShortsId(shortsId);
        } else {
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
        if (!file.isEmpty()) {
            String storedFileName = s3Uploader.upload(file, "images");
            shortsEntity.setFileSrc(storedFileName);
        }
        ShortsEntity shortsEntityForSave = shortsRepository.save(shortsEntity);
        return shortsEntityForSave.getShortsId();
    }

    @Override
//    @Scheduled(cron = "0 0 0 1/1 * ? *")
    @Transactional
    public void updateMappedStates() {

        List<ShortsIdAndTotalCntProjectionInterface> shortsLikes = likeRepository.getShortsTotalLikeAndSumLike();
        for (ShortsIdAndTotalCntProjectionInterface i : shortsLikes){
            ShortsEntity shorts = shortsRepository.findById(i.getShortsId()).orElseThrow(ShortsNotFoundException::new);
            if(i.getTotalCnt()>=10 && (float)i.getLikeCnt()/i.getTotalCnt()>=0.7 ){
                shorts.setIsMapped(true);
            }else{
                shorts.setIsMapped(false);
            }
        }

    }



    @Transactional(readOnly = true)
    public String getThumbnail(ShortsIdAndLikeCntProjectionInterface m) {
        return shortsRepository.findById(m.getShortsId()).orElseThrow(ShortsNotFoundException::new).getThumbnailSrc();

    }




}
