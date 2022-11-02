package com.hipmap.domain.like;

import com.hipmap.domain.shorts.ShortsEntity;
import com.hipmap.domain.user.UserEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="shorts_like")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LikeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likeId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "shorts_id")
    private ShortsEntity shorts;

    @Column(name = "is_like",nullable = false)
    private Boolean vote;

}
