package com.hipmap.domain.follow;

import com.hipmap.domain.follow.Exception.FollowDuplicateException;
import com.hipmap.domain.follow.dto.FollowUserInfoResponseDto;
import com.hipmap.domain.follow.dto.FollowSaveRequestDto;
import com.hipmap.domain.notification.NotificationService;
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

    private final NotificationService notificationService;

    @Transactional
    @Override
    public void createFollow(Long loginUserId, Long opponentUserId) {
        UserEntity loginUser = userRepository.findById(loginUserId).orElseThrow(UserNotFoundException::new);
        UserEntity opponentUser = userRepository.findById(opponentUserId).orElseThrow(UserNotFoundException::new);

        FollowSaveRequestDto saveRequestDto = new FollowSaveRequestDto(loginUser, opponentUser);
        if (!followRepository.findByUserAndFollowingUser(loginUser, opponentUser).isPresent()) {
            followRepository.save(saveRequestDto.toEntity());
            String nickname = loginUser.getNickname();
            notificationService.send(opponentUser,nickname + "님이 팔로우하셨습니다.","/팔로우 창"); // 차후 url 변경 예정
        } else {
            throw new FollowDuplicateException();
        }
    }

    @Transactional
    @Override
    public void deleteFollow(Long loginUserId, Long opponentUserId) {
        UserEntity loginUser = userRepository.findById(loginUserId).orElseThrow(UserNotFoundException::new);
        UserEntity opponentUser = userRepository.findById(opponentUserId).orElseThrow(UserNotFoundException::new);

        Long UserAndFollowingUser = followRepository.findByUserAndFollowingUser(loginUser, opponentUser).orElseThrow(UserNotFoundException::new).getFollowId();
        followRepository.deleteByFollowId(UserAndFollowingUser);
    }

    @Transactional
    @Override
    public List<FollowUserInfoResponseDto> getFollowerList(Long userId) {
        UserEntity userEntity = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);

        return followRepository.findAllByFollowingUser(userEntity).stream()
                .map(m -> userRepository.findById(m.getUser().getUserId()).orElseThrow(UserNotFoundException::new))
                .map(m -> new FollowUserInfoResponseDto(m.getUserId(), m.getUsername(), m.getProImgSrc()))
                .collect(Collectors.toList());
    }
    public List<FollowUserInfoResponseDto> getFollowingList(Long userId){
        UserEntity userEntity = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        return followRepository.findAllByUser(userEntity).stream()
                .map(m -> userRepository.findById(m.getFollowingUser().getUserId()).orElseThrow(UserNotFoundException::new))
                .map(m -> new FollowUserInfoResponseDto(m.getUserId(), m.getUsername(), m.getProImgSrc()))
                .collect(Collectors.toList());
    }

    @Transactional
    @Override
    public Long countFollowing(Long userId) {
        UserEntity userEntity = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        return followRepository.countByFollowingUser(userEntity);
    }

    @Transactional
    @Override
    public List<String> searchFollowers(String keyword, Long loginUserId) {
        return followRepository.findAllSearch(keyword, loginUserId);
    }

    public Long countFollower(Long userId) {
        UserEntity userEntity = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        return followRepository.countByUser(userEntity);
    }
}

















