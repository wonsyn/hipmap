package com.hipmap.domain.comment;

import com.hipmap.domain.shorts.ShortsEntity;
import com.hipmap.domain.user.UserEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="comment")
@Getter
@Setter
public class CommentEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @ManyToOne
    @JoinColumn(name = "shorts_id", referencedColumnName = "shortsId")
    private ShortsEntity shorts;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private UserEntity user;

    @Lob
    private String content;

    private Long comment_group;

    private Long sequence;

    private LocalDateTime createTime;
}
