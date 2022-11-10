package com.hipmap.domain.comment;

import com.hipmap.domain.shorts.ShortsEntity;
import com.hipmap.domain.user.UserEntity;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "comment")
@Getter
@Setter
@NoArgsConstructor
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

    private Long commentGroup;

    private Long sequence;

    private LocalDateTime createTime;

    @Builder
    public CommentEntity(Long commentId, ShortsEntity shorts, UserEntity user, String content, Long commentGroup, Long sequence, LocalDateTime createTime) {
        this.commentId = commentId;
        this.shorts = shorts;
        this.user = user;
        this.content = content;
        this.commentGroup = commentGroup;
        this.sequence = sequence;
        this.createTime = createTime;
    }
}
