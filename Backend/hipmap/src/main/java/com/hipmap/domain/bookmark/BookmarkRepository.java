package com.hipmap.domain.bookmark;

import com.hipmap.domain.shorts.ShortsEntity;
import com.hipmap.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookmarkRepository extends JpaRepository<BookmarkEntity, Long> {

    List<BookmarkEntity> findByUser(UserEntity user);

    BookmarkEntity findBookmarkByUserAndShorts(UserEntity user, ShortsEntity shorts);
}
