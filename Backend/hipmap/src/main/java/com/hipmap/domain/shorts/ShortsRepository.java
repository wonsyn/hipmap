package com.hipmap.domain.shorts;

import com.hipmap.domain.user.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ShortsRepository extends JpaRepository<ShortsEntity, Long> {
    Page<ShortsEntity> findByIsMappedFalseAndCreateTimeGreaterThanEqual(Pageable pageable, LocalDateTime dateTime);

    Long deleteByShortsId(Long shortsId);

    List<ShortsEntity> findAllByUser(UserEntity user);

    Long countByUser(UserEntity user);


}
