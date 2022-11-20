package com.hipmap.domain.follow;

import com.hipmap.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface FollowRepository extends JpaRepository<FollowEntity, Long> {
    Long countByUserAndFollowingUser(UserEntity userEntity, UserEntity followEntity);

    List<FollowEntity> findAllByUser(UserEntity user);

    List<FollowEntity> findAllByFollowingUser(UserEntity followingUser);

    Optional<FollowEntity> findByUserAndFollowingUser(UserEntity user, UserEntity followingUser);

    // DeleteByFollowId
    void deleteByFollowId(Long followId);

    // follower count
    Long countByFollowingUser(UserEntity followingUser);

    @Query("SELECT f.followingUser.username FROM FollowEntity f WHERE f.followingUser.username LIKE %:keyword% AND f.user.userId = :userId")
    List<String> findAllSearch(@Param("keyword") String keyword, @Param("userId") Long userId);

    Long countByUser(UserEntity userEntity);
}