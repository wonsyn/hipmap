package com.hipmap.domain.shorts;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class ShortsRepositorySupport extends QuerydslRepositorySupport {

    private final JPAQueryFactory jpaQueryFactory;

    QShortsEntity qShortsEntity = QShortsEntity.shortsEntity;

    public ShortsRepositorySupport(JPAQueryFactory jpaQueryFactory) {
        super(ShortsEntity.class);
        this.jpaQueryFactory = jpaQueryFactory;
    }
}
