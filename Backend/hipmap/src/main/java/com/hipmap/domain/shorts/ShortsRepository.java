package com.hipmap.domain.shorts;

import com.hipmap.domain.shorts.response.ShortsIdAndLikeCntProjectionInterface;
import com.hipmap.domain.user.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ShortsRepository extends JpaRepository<ShortsEntity, Long> {
    @Override
    Page<ShortsEntity> findAll(Pageable pageable);

    Long deleteByShortsId(Long shortsId);

    List<ShortsEntity> findAllByUser(UserEntity user);

    Long countByUser(UserEntity user);


}
