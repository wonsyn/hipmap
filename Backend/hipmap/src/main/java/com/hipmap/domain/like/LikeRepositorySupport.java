package com.hipmap.domain.like;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class LikeRepositorySupport extends QuerydslRepositorySupport {
    private final JPAQueryFactory jpaQueryFactory;
    QLikeEntity qLike = QLikeEntity.likeEntity;

    public LikeRepositorySupport(JPAQueryFactory jpaQueryFactory) {
        super(LikeEntity.class);
        this.jpaQueryFactory = jpaQueryFactory;
    }

    public Long countLikeByShortsId(Long shortsId){
        return jpaQueryFactory.select(qLike.vote).from(qLike).where(qLike.shorts.shortsId.eq(shortsId).and(qLike.vote).isTrue()).stream().count();
    }

    public Long countHateByShortsId(Long shortsId){
        return jpaQueryFactory.select(qLike.vote).from(qLike).where(qLike.shorts.shortsId.eq(shortsId).and(qLike.vote).isFalse()).stream().count();
    }
}
