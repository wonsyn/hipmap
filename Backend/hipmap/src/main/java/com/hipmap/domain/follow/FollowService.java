package com.hipmap.domain.follow;

import com.hipmap.domain.follow.dto.FollowInfoResponseDto;

import java.util.List;

public interface FollowService {
    void createFollow(Long loginUsername,Long username);

    void deleteFollow(Long loginUserId, Long opponentUserId);

    List<FollowInfoResponseDto> getFollowerList(Long userId);
    List<String> searchFollowers(String keyword, Long loginUserId);

    List<FollowInfoResponseDto> getFollowingList(Long userId);


    Long countFollowing(Long userId);

    Long countFollower(Long userId);
}
