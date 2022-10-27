package com.hipmap.domain.bookmark;


import java.util.List;

public interface BookmarkService {

    BookmarkEntity createBookmark(Long userId, Long shortsId);

    void deleteBookmark(Long userId, Long shortsId);

    List<GetBookmarkResponse> findBookmarksByUserId(Long userId);

}
