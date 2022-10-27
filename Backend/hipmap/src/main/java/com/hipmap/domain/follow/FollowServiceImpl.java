package com.hipmap.domain.follow;

import com.hipmap.domain.follow.dto.FollowSaveRequestDto;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import com.hipmap.domain.user.UserEntity;
import com.hipmap.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class FollowServiceImpl implements FollowService {

    private final FollowRepository followRepository;
    private final UserRepository userRepository;
    @Transactional
    @Override
    public void createFollow(String loginUsername, String username) {
        UserEntity loginUser = userRepository.findByUsername(username).orElseThrow(UserNotFoundException::new);
        UserEntity opponentUser = userRepository.findByUsername(username).orElseThrow(UserNotFoundException::new);

        FollowSaveRequestDto dto = new FollowSaveRequestDto(loginUser, opponentUser);
        followRepository.save(dto.toEntity());
    }
}
