package com.hipmap.domain.comment;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CommentReposiotrySupport extends QuerydslRepositorySupport {
    private final JPAQueryFactory jpaQueryFactory;

    QCommentEntity qComment = QCommentEntity.commentEntity;

    public CommentReposiotrySupport (JPAQueryFactory jpaQueryFactory) {
        super(CommentEntity.class);
        this.jpaQueryFactory = jpaQueryFactory;
    }

    public List<CommentEntity> findCommentsByShortsId(Long shortsId){
        return jpaQueryFactory.selectFrom(qComment).where(qComment.shorts.shortsId.eq(shortsId)).fetch();
    }
}
