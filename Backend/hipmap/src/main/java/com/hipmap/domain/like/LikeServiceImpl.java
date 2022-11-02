package com.hipmap.domain.like;

import com.hipmap.domain.like.Exception.LikeAlreadyExistsException;
import com.hipmap.domain.like.Exception.LikeDuplicateProcessingException;
import com.hipmap.domain.like.Exception.LikeNotFoundException;
import com.hipmap.domain.like.dto.LikeUpdateResponseDto;
import com.hipmap.domain.shorts.Exception.ShortsNotFoundException;
import com.hipmap.domain.shorts.ShortsEntity;
import com.hipmap.domain.shorts.ShortsRepository;
import com.hipmap.domain.shorts.response.ShortsIdAndLikeCntProjectionInterface;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import com.hipmap.domain.user.UserEntity;
import com.hipmap.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LikeServiceImpl implements LikeService {

    private final LikeRepository likeRepository;
    private final UserRepository userRepository;
    private final ShortsRepository shortsRepository;

    @Transactional
    @Override
    public Long create(Long userId, Long shortsId, Boolean vote) {

        UserEntity userEntity = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        ShortsEntity shortsEntity = shortsRepository.findById(shortsId).orElseThrow(ShortsNotFoundException::new);


        if (!likeRepository.findByUserAndShorts(userEntity, shortsEntity).isPresent()) {
            LikeEntity createLike = LikeEntity.builder()
                    .user(userEntity)
                    .shorts(shortsEntity)
                    .vote(vote)
                    .build();
            likeRepository.save(createLike);
        } else {
            throw new LikeAlreadyExistsException();
        }

        return likeRepository.countByVoteAndShorts(true, shortsEntity);
    }

    @Transactional
    @Override
    public LikeUpdateResponseDto update(Long userId, Long shortsId, Boolean vote) {

        UserEntity userEntity = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        ShortsEntity shortsEntity = shortsRepository.findById(shortsId).orElseThrow(ShortsNotFoundException::new);

        LikeEntity likeEntity = likeRepository.findByUserAndShorts(userEntity, shortsEntity).orElseThrow(LikeNotFoundException::new);

        if (vote!= likeEntity.getVote()) {
            likeEntity.setVote(vote);
        } else {
            throw new LikeDuplicateProcessingException();
        }

        LikeUpdateResponseDto responseDto = new LikeUpdateResponseDto();

        responseDto.setLikeCount(likeRepository.countByVoteAndShorts(true, shortsEntity));
        responseDto.setVote(likeEntity.getVote());

        return responseDto;
    }

    @Transactional
    @Override
    public Long delete(Long userId, Long shortsId) {
        UserEntity userEntity = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        ShortsEntity shortsEntity = shortsRepository.findById(shortsId).orElseThrow(ShortsNotFoundException::new);

        LikeEntity like = likeRepository.findByUserAndShorts(userEntity, shortsEntity).orElseThrow(LikeNotFoundException::new);
        likeRepository.delete(like);
        return likeRepository.countByVoteAndShorts(true, shortsEntity);
    }

    @Override
    @Transactional
    public List<ShortsIdAndLikeCntProjectionInterface> shortsTop5ByCountLike() {
        // 1. Like 테이블에서 shorts_id로 그룹바이해서 sum한 값 select하고, 이때 orderBy sum 으로 탑5의 shorts_id 가져오기
        List<ShortsIdAndLikeCntProjectionInterface> top5ByShortsId = likeRepository.findTop5ByShortsId();

        return top5ByShortsId;
    }
}
