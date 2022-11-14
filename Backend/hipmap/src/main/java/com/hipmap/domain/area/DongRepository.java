package com.hipmap.domain.area;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DongRepository extends JpaRepository<DongEntity, String> {
    List<DongEntity> findByCodeStartsWith(String gugun);
}
