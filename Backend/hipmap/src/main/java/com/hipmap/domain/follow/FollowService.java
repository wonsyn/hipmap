package com.hipmap.domain.follow;

import com.hipmap.domain.follow.dto.FollowConfirmResponseDto;
import com.hipmap.domain.follow.dto.FollowUserInfoResponseDto;

import java.util.List;

public interface FollowService {
    void createFollow(Long loginUsername,Long username);

    Boolean followConfirm(Long loginUserId, Long opponentUserId);
    void deleteFollow(Long loginUserId, Long opponentUserId);

    List<FollowUserInfoResponseDto> getFollowerList(Long userId);
    List<String> searchFollowers(String keyword, Long loginUserId);

    List<FollowUserInfoResponseDto> getFollowingList(Long userId);


    Long countFollowing(Long userId);

    Long countFollower(Long userId);
}
