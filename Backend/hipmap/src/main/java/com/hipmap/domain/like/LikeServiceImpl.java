package com.hipmap.domain.like;

import com.hipmap.domain.like.Exception.LikeAlreadyExistsException;
import com.hipmap.domain.like.Exception.LikeDuplicateProcessingException;
import com.hipmap.domain.like.Exception.LikeNotFoundException;
import com.hipmap.domain.like.dto.LikeSaveRequestDto;
import com.hipmap.domain.like.dto.LikeUpdateRequestDto;
import com.hipmap.domain.like.dto.LikeUpdateResponseDto;
import com.hipmap.domain.shorts.Exception.ShortsNotFoundException;
import com.hipmap.domain.shorts.ShortsEntity;
import com.hipmap.domain.shorts.ShortsRepository;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import com.hipmap.domain.user.UserEntity;
import com.hipmap.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LikeServiceImpl implements LikeService {

    private final LikeRepository likeRepository;
    private final UserRepository userRepository;
    private final ShortsRepository shortsRepository;

    @Transactional
    @Override
    public Long create(@RequestBody LikeSaveRequestDto dto) {

        UserEntity user = userRepository.findById(dto.getUserId()).orElseThrow(UserNotFoundException::new);
        ShortsEntity shorts = shortsRepository.findById(dto.getShorts()).orElseThrow(ShortsNotFoundException::new);

        LikeEntity createLike = LikeEntity.builder()
                .user(user)
                .shorts(shorts)
                .isLike(true)
                .build();

        if (!likeRepository.findByUserAndShorts(createLike.getUser().getUserId(), createLike.getShorts().getShortsId()).isPresent()) {
            likeRepository.save(createLike);
        } else {
            throw new LikeAlreadyExistsException();
        }

        return likeRepository.countByIsLikeAndShorts(createLike.getIsLike(), createLike.getShorts().getShortsId());
    }

    @Transactional
    @Override
    public LikeUpdateResponseDto update(Long userId, LikeUpdateRequestDto dto) {

        LikeEntity like = likeRepository.findByUserAndShorts(userId, dto.getShortsId()).orElseThrow(LikeNotFoundException::new);

        if (dto.getIsLike() != like.getIsLike()) {
            like.setIsLike(!like.getIsLike());
        } else {
            throw new LikeDuplicateProcessingException();
        }

        LikeUpdateResponseDto responseDto = new LikeUpdateResponseDto();

        responseDto.setLikeCount(likeRepository.countByIsLikeAndShorts(like.getIsLike(), dto.getShortsId()));
        responseDto.setIsLike(like.getIsLike());

        return responseDto;
    }

    @Transactional
    @Override
    public Long delete(Long userId, Long shortsId) {
        LikeEntity like = likeRepository.findByUserAndShorts(userId, shortsId).orElseThrow(LikeNotFoundException::new);
        likeRepository.delete(like);
        return likeRepository.countByIsLikeAndShorts(true, shortsId);
    }

    @Override
    public List<ShortsEntity> shortsTop5ByCountLike() {
        // 1. Like 테이블에서 shorts_id로 그룹바이해서 sum한 값 select하고, 이때 orderBy sum 으로 탑5의 shorts_id 가져오기
        List<ShortsEntity> top5ByShortsId = likeRepository.findTop5ByShortsId();
        for (ShortsEntity s: top5ByShortsId) {
            System.out.println(s.getShortsId());
        }
        return top5ByShortsId;
    }
}
