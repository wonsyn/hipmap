package com.hipmap.domain.like;

import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface LikeRepository extends JpaRepository<LikeEntity, Long>{
    @Query("select count (l) from LikeEntity l where l.shorts.shortsId = :shorts and l.isLike = :isLike")
    Long countByIsLikeAndShorts(@Param("isLike") Boolean isLike, @Param("shorts") Long shorts);

    @Query("select l from LikeEntity l where l.user.userId = :user and l.shorts.shortsId = :shorts")
    Optional<LikeEntity> findByUserAndShorts(Long user, Long shorts);

}
