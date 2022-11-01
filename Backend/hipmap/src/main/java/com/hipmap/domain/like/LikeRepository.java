package com.hipmap.domain.like;

import com.hipmap.domain.shorts.ShortsEntity;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface LikeRepository extends JpaRepository<LikeEntity, Long> {
    @Query("select count (l) from LikeEntity l where l.shorts.shortsId = :shorts and l.isLike = :isLike")
    Long countByIsLikeAndShorts(@Param("isLike") Boolean isLike, @Param("shorts") Long shorts);

    @Query("select l from LikeEntity l where l.user.userId = :user and l.shorts.shortsId = :shorts")
    Optional<LikeEntity> findByUserAndShorts(Long user, Long shorts);


    // 1. Like 테이블에서 shorts_id로 그룹바이해서 count한 값 select하고, 이때 orderBy sum 으로 탑5의 shorts_id 가져오기
    @Query(value = "SELECT shorts FROM LikeEntity GROUP BY shorts HAVING isLike = true ORDER BY isLike DESC LIMIT 5", nativeQuery = true)
    List<ShortsEntity> findTop5ByShortsId();

}
