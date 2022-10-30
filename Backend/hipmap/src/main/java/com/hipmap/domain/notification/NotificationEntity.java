package com.hipmap.domain.notification;

import javax.persistence.*;

import com.hipmap.domain.user.UserEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class NotificationEntity extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "receiverId")
    @JoinColumn(nullable = false, foreignKey = @ForeignKey(name = "fk_notification_to_receiver"))
    private UserEntity receiver;

    private String content;

    private String url;

    private boolean isRead;

    @Builder
    public NotificationEntity(UserEntity receiver, String content, String url, boolean isRead) {
        this.receiver = receiver;
        this.content = content;
        this.url = url;
        this.isRead = isRead;
    }

    public void read() {
        this.isRead = true;
    }
}
