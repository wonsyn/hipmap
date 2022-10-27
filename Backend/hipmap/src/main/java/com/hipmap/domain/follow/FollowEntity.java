package com.hipmap.domain.follow;

import com.hipmap.domain.user.UserEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "follow")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FollowEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long followId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "following_id")
    private UserEntity followingUser;

}