package com.hipmap.domain.area;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "gugun")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class GugunEntity {
    @Id
    String code;
    String sido;
    String gugun;
}
