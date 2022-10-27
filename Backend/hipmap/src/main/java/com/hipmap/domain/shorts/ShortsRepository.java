package com.hipmap.domain.shorts;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ShortsRepository extends JpaRepository<ShortsEntity, Long> {
    @Override
    Page<ShortsEntity> findAll(Pageable pageable);
}
