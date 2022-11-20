package com.hipmap.domain.area;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GugunRepository extends JpaRepository<GugunEntity, String> {
    List<GugunEntity> findByCodeStartsWith(String code);
}
