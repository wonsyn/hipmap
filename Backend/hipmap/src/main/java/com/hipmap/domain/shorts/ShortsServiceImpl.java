package com.hipmap.domain.shorts;

import com.hipmap.domain.comment.CommentReposiotrySupport;
import com.hipmap.domain.like.LikeEntity;
import com.hipmap.domain.like.LikeRepository;
import com.hipmap.domain.like.LikeRepositorySupport;
import com.hipmap.domain.shorts.Exception.ShortsNotFoundException;
import com.hipmap.domain.shorts.dto.request.CreateShortsRequest;
import com.hipmap.domain.shorts.dto.request.GetMapListFilterRequest;
import com.hipmap.domain.shorts.dto.response.*;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import com.hipmap.domain.user.UserEntity;
import com.hipmap.domain.user.UserRepository;
import com.hipmap.global.util.S3Util;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class ShortsServiceImpl implements ShortsService {

    private final ShortsRepository shortsRepository;

    private final UserRepository userRepository;

    private final LikeRepository likeRepository;

    private final ShortsRepositorySupport shortsRepositorySupport;

    private final LikeRepositorySupport likeRepositorySupport;

    private final CommentReposiotrySupport commentReposiotrySupport;

    private final S3Util s3Uploader;

    @Override
    public Page<ShortsResponse> getShorts(Pageable pageable, Long userId) {
        Page<ShortsEntity> shortsEntities = shortsRepository.findAll(pageable);
        Page<ShortsResponse> boardDtoList = shortsEntities.map(m -> ShortsResponse.builder()
                .shortsId(m.getShortsId())
                .fileSrc(m.getFileSrc())
                .thumbnailSrc(m.getThumbnailSrc())
                .locationSi(m.getLocationSi())
                .locationGu(m.getLocationGu())
                .locationDong(m.getLocationDong())
                .createTime(m.getCreateTime())
                .likeCount(likeRepositorySupport.countLikeByShortsId(m.getShortsId()))
                .hateCount(likeRepositorySupport.countHateByShortsId(m.getShortsId()))
                .commentsCount((long) m.getComments().size())
                .isLike(setLikeType(userRepository.findById(userId).orElseThrow(UserNotFoundException :: new), m))
                .fileType(m.getFileType())
                .build());
        return boardDtoList;
    }

    public LikeType setLikeType(UserEntity user, ShortsEntity shorts){
        Optional<LikeEntity> likeEntityOp = likeRepository.findByUserAndShorts(user,shorts);
        if(likeEntityOp.isPresent()){
            if(likeEntityOp.get().getVote()){
                return LikeType.love;
            }else{
                return LikeType.hate;
            }
        }else{
            return LikeType.none;
        }
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
    public List<GetShortsByLabelAndLocResponse> getShortsByLabelAndLocation(Long userId, GetMapListFilterRequest request) {
        Optional<UserEntity> user = userRepository.findById(userId);
        if (user.isPresent()) {
            String lableName = user.get().getLabelName();
            List<ShortsEntity> shortsEntities = shortsRepositorySupport.getShortsEntityByLabelAndLocation(lableName, request);
            List<GetShortsByLabelAndLocResponse> boardDtoList = shortsEntities.stream().map(m -> GetShortsByLabelAndLocResponse.builder()
                    .shortsId(m.getShortsId())
                    .thumbnailSrc(m.getThumbnailSrc())
                    .longitude(m.getLongitude())
                    .latitude(m.getLatitude())
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
    public Long uploadFile(MultipartFile file, CreateShortsRequest request , Long userId) throws Exception {
        if (!file.isEmpty()) {
                String dirname;
            if(request.getFileType()==FileType.video){
                dirname = "videos";
            }else if(request.getFileType()==FileType.image){
                dirname = "images";
            }else{
                dirname = "voices";
            }
            String storedFileSrc = s3Uploader.upload(file, dirname, userId);
            UserEntity user = userRepository.findById(userId).orElseThrow(UserNotFoundException ::new);
            ShortsEntity shorts = ShortsEntity.builder()
                    .fileSrc(storedFileSrc)
                    .thumbnailSrc("https://hipmap.s3.ap-northeast-2.amazonaws.com/images/%EC%A0%9C%EB%AA%A9%EC%9D%84+%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94_-005+(1).png") // 차후 올바른 썸네일 주소 입력 예정
                    .locationSi(request.getLocationSi())
                    .locationGu(request.getLocationGu())
                    .locationDong(request.getLocationDong())
                    .isMapped(false)
                    .labelName(user.getLabelName())
                    .latitude(request.getLatitude())
                    .longitude(request.getLongitude())
                    .createTime(LocalDateTime.now())
                    .user(user)
                    .fileType(request.getFileType())
                    .build();
            shortsRepository.save(shorts);
            return shorts.getShortsId();
        }else throw new RuntimeException();


    }

    @Override
//    @Scheduled(cron = "0 0 0 * * ?") // 스케쥴링 예정 - 잘됨
    @Transactional
    public void updateMappedStates() {
        List<ShortsEntity> shortsEntities = shortsRepository.findAll();
        List<ShortsIdAndTotalCntProjectionInterface> shortsLikes = likeRepository.getShortsTotalLikeAndSumLike();


        for (ShortsEntity s : shortsEntities){
            if(!likeRepository.existsByShorts_ShortsId(s.getShortsId())){
                s.setIsMapped(false);
            }else{
                for (ShortsIdAndTotalCntProjectionInterface i : shortsLikes){
                    ShortsEntity shorts = shortsRepository.findById(i.getShortsId()).orElseThrow(ShortsNotFoundException::new);
                    if(i.getTotalCnt()>=10 && (float)i.getLikeCnt()/i.getTotalCnt()>=0.7 ){
                        shorts.setIsMapped(true);
                    }else{
                        shorts.setIsMapped(false);
                    }
                }
            }
        }


    }



    @Transactional(readOnly = true)
    public String getThumbnail(ShortsIdAndLikeCntProjectionInterface m) {
        return shortsRepository.findById(m.getShortsId()).orElseThrow(ShortsNotFoundException::new).getThumbnailSrc();

    }

    @Override
    public ShortsInfoResponse getShortsInfoByShortsId(Long shortsId) {
        ShortsEntity shorts = shortsRepository.findById(shortsId).orElseThrow(ShortsNotFoundException::new);
        ShortsInfoResponse response = ShortsInfoResponse.builder()
                .shortsId(shorts.getShortsId())
                .fileSrc(shorts.getFileSrc())
                .thumbnailSrc(shorts.getThumbnailSrc())
                .locationSi(shorts.getLocationSi())
                .locationGu(shorts.getLocationGu())
                .locationDong(shorts.getLocationDong())
                .createTime(shorts.getCreateTime())
                .likeCount(likeRepositorySupport.countLikeByShortsId(shortsId))
                .hateCount(likeRepositorySupport.countHateByShortsId(shortsId))
                .commentsCount(commentReposiotrySupport.countCommentsByShortsId(shortsId))
                .isLike(setLikeType(shorts.getUser(),shortsRepository.findById(shortsId).orElseThrow(ShortsNotFoundException::new)))
                .fileType(shorts.getFileType())
                .userId(shorts.getUser().getUserId())
                .nickname(shorts.getUser().getNickname())
                .build();
        return response;
    }


}
