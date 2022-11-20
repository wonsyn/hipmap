package com.hipmap.domain.area;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dong")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class DongEntity {
    @Id
    String code;
    String sido;
    String gugun;
    String dong;
}
