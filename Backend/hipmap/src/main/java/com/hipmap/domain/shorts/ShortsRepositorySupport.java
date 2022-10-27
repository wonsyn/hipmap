package com.hipmap.domain.shorts;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ShortsRepositorySupport extends QuerydslRepositorySupport {

    private final JPAQueryFactory jpaQueryFactory;

    QShortsEntity qShortsEntity = QShortsEntity.shortsEntity;

    public ShortsRepositorySupport(JPAQueryFactory jpaQueryFactory) {
        super(ShortsEntity.class);
        this.jpaQueryFactory = jpaQueryFactory;
    }

    public List<ShortsEntity> getShortsEntityByLabel(String labeling){
        return jpaQueryFactory.selectFrom(qShortsEntity).where(qShortsEntity.labelName.eq(labeling)).fetch();
    }

    public Long getShortsCountByUsername(String username){
        return  jpaQueryFactory.selectFrom(qShortsEntity).where(qShortsEntity.user.username.eq(username)).stream().count();
    }
}
