package com.hipmap.domain.notification;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NotificationRepositorySupport extends QuerydslRepositorySupport {

    private final JPAQueryFactory jpaQueryFactory;

    QNotificationEntity qNotification =QNotificationEntity.notificationEntity;

    public NotificationRepositorySupport(JPAQueryFactory jpaQueryFactory){
        super(NotificationEntity.class);
        this.jpaQueryFactory =jpaQueryFactory;

    }

    List<NotificationEntity> findAllByReceiverId(Long id){
        return jpaQueryFactory.selectFrom(qNotification).where(qNotification.receiver.userId.eq(id)).fetch();
    }
}
