package com.hipmap.domain.follow;

import com.hipmap.domain.user.UserEntity;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface FollowRepository extends JpaRepository<FollowEntity, Long> {
    Optional<FollowEntity> findAllByUser(UserEntity user);
    // UserEntity user UserEntity followingUser

    // loginUsername, opponentUsername find pk
    Optional<FollowEntity> findByUserAndFollowingUser(UserEntity user, UserEntity followingUser);

    // DeleteByFollowId
    void deleteByFollowId(Long followId);

    // follower count
    Long countByfollowingUser(UserEntity followingUser);


    @Query("SELECT f.followingUser FROM FollowEntity f WHERE f.followingUser.username LIKE %:keyword% AND f.user.username = :username")
    List<String> findAllSearch(@Param("keyword") String keyword, @Param("username") String username);
}