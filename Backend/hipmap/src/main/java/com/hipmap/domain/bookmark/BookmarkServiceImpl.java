package com.hipmap.domain.bookmark;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("bookmarkService")
public class BookmarkServiceImpl implements BookmarkService {

    @Autowired
    BookmarkRepository bookmarkRepository;

    @Autowired
    BookmarkRepositorySupport bookmarkRepositorySupport;
    @Override
    public BookmarkEntity createBookmark(Long userId, Long shortsId) {
        BookmarkEntity newBookmark = new BookmarkEntity();
        //newBookmark.setUser(); => 유저 완성이후
        //newBookmark.setShorts(); => 쇼츠 완성 이후
        return bookmarkRepository.save(newBookmark);
    }
}
