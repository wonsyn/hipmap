package com.hipmap.domain.follow;

import com.hipmap.domain.follow.Exception.FollowDuplicateException;
import com.hipmap.domain.follow.dto.FollowSaveRequestDto;
import com.hipmap.domain.follow.dto.FollowerFindAllResponseDto;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import com.hipmap.domain.user.UserEntity;
import com.hipmap.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FollowServiceImpl implements FollowService {

    private final FollowRepository followRepository;
    private final UserRepository userRepository;

    @Transactional
    @Override
    public void createFollow(String loginUsername, String username) {
        UserEntity loginUser = userRepository.findByUsername(loginUsername).orElseThrow(UserNotFoundException::new);
        UserEntity opponentUser = userRepository.findByUsername(username).orElseThrow(UserNotFoundException::new);

        FollowSaveRequestDto dto = new FollowSaveRequestDto(loginUser, opponentUser);
        if (!followRepository.findByUserAndFollowingUser(loginUser, opponentUser).isPresent()) {
            followRepository.save(dto.toEntity());
        } else {
            throw new FollowDuplicateException("이미 처리된 정보입니다.");
        }
    }

    @Transactional
    @Override
    public void deleteFollow(String loginUsername, String opponentUsername) {
//        UserEntity
        UserEntity loginUsernameEntity = userRepository.findByUsername(loginUsername).orElseThrow(UserNotFoundException::new);
        UserEntity opponentUsernameEntity = userRepository.findByUsername(opponentUsername).orElseThrow(UserNotFoundException::new);

        Long UserAndFollowingUser = followRepository.findByUserAndFollowingUser(loginUsernameEntity, opponentUsernameEntity).orElseThrow(UserNotFoundException::new).getFollowId();
        followRepository.deleteByFollowId(UserAndFollowingUser);
    }

    @Transactional
    @Override
    public List<FollowerFindAllResponseDto> findAllByUsername(String username) {
        UserEntity userEntity = userRepository.findByUsername(username).orElseThrow(UserNotFoundException::new);
        return followRepository.findAllByUser(userEntity).stream().map(FollowerFindAllResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    @Override
    public Long countMyFollower(String username) {
        UserEntity userEntity = userRepository.findByUsername(username).orElseThrow(UserNotFoundException::new);
        return followRepository.countByfollowingUser(userEntity);
    }

    @Transactional
    @Override
    public List<String> findAllSearchByfollowerName(String followerName, String loginUsername) {
        List<String> Followers = followRepository.findAllSearch(followerName, loginUsername);
        return Followers;
    }

    public Long countByFollowing(String username) {
        UserEntity userEntity = userRepository.findByUsername(username).orElseThrow(UserNotFoundException::new);
        return followRepository.countByUser(userEntity);
    }
}

















