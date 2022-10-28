package com.hipmap.domain.follow;

import com.hipmap.domain.follow.dto.FollowerFindAllResponseDto;

import java.util.List;

public interface FollowService {
    void createFollow(String loginUsername,String username);

    void deleteFollow(String loginUsername, String opponentUsername);

    List<FollowerFindAllResponseDto> findAllByUsername(String username);
    List<String> findAllSearchByfollowerName(String followerName, String loginUsername);


    Long countMyFollower(String username);

    Long countByFollowing(String username);
}
