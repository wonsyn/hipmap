package com.hipmap.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
    Optional<UserEntity> findByUsernameAndPassword(String username, String password);
    Optional<UserEntity> findByUsername(String username);
    List<UserEntity> findByIsCertedFalseAndRegDateTimeLessThanEqual(LocalDateTime regDateTime);
}
