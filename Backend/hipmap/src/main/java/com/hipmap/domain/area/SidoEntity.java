package com.hipmap.domain.area;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sido")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class SidoEntity {
    @Id
    String code;
    String sido;
}
