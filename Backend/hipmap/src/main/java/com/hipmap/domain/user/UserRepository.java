package com.hipmap.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByUserEmail(String email);

    Optional<UserEntity> findByUsername(String username);
    List<UserEntity> findAllByUsername(String username);
}
