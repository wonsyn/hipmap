package com.hipmap.domain.bookmark;

import com.querydsl.jpa.impl.JPAQueryFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class BookmarkRepositorySupport extends QuerydslRepositorySupport {


    private final JPAQueryFactory jpaQueryFactory;

    QBookmarkEntity qBookmark =QBookmarkEntity.bookmarkEntity;

    public BookmarkRepositorySupport(JPAQueryFactory jpaQueryFactory){
        super(BookmarkEntity.class);
        this.jpaQueryFactory =jpaQueryFactory;

    }
}
