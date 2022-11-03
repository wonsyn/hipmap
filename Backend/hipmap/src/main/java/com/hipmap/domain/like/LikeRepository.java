package com.hipmap.domain.like;

import com.hipmap.domain.shorts.ShortsEntity;
import com.hipmap.domain.shorts.response.ShortsIdAndLikeCntProjectionInterface;
import com.hipmap.domain.shorts.response.ShortsIdAndTotalCntProjectionInterface;
import com.hipmap.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface LikeRepository extends JpaRepository<LikeEntity, Long> {
    Long countByVoteAndShorts(Boolean vote, ShortsEntity shorts);

    Optional<LikeEntity> findByUserAndShorts(UserEntity user, ShortsEntity shorts);

    // 1. Like 테이블에서 shorts_id로 그룹바이해서 count한 값 select하고, 이때 orderBy sum 으로 탑5의 shorts_id 가져오기
    @Query(value = "SELECT shorts_id as shortsId, sum(is_like) AS likeCnt FROM shorts_like GROUP BY shorts_id ORDER BY sum(is_like) DESC limit 5", nativeQuery = true)
    List<ShortsIdAndLikeCntProjectionInterface> findTop5ByShortsId();

    @Query(value = "SELECT shorts_id as shortsId, count(is_like) AS totalCnt,sum(is_like) AS likeCnt FROM shorts_like GROUP BY shorts_id", nativeQuery = true)
    List<ShortsIdAndTotalCntProjectionInterface> getShortsTotalLikeAndSumLike();

}
