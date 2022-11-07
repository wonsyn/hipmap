package com.hipmap.domain.shorts;

import com.hipmap.domain.like.QLikeEntity;
import com.hipmap.domain.shorts.request.GetMapListFilterRequest;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public class ShortsRepositorySupport extends QuerydslRepositorySupport {

    private final JPAQueryFactory jpaQueryFactory;

    QShortsEntity qShortsEntity = QShortsEntity.shortsEntity;

    QLikeEntity qLike =QLikeEntity.likeEntity;

    public ShortsRepositorySupport(JPAQueryFactory jpaQueryFactory) {
        super(ShortsEntity.class);
        this.jpaQueryFactory = jpaQueryFactory;
    }

    public List<ShortsEntity> getShortsEntityByLabel(String labeling){
        return jpaQueryFactory.selectFrom(qShortsEntity).where(qShortsEntity.labelName.eq(labeling)).fetch();
    }

    public List<ShortsEntity> getShortsEntityByLabelAndLocation(String labeling, GetMapListFilterRequest request){

        if(request.getIsFilterChecked()){
            return jpaQueryFactory.selectFrom(qShortsEntity)
                    .where(qShortsEntity.isMapped.isTrue(),
                            eqLocationSi(request.getLocationSi()),
                            eqLocationGu(request.getLocationGu()),
                            eqLocationDong(request.getLocationDong()),
                            qShortsEntity.labelName.eq(labeling),
                            qShortsEntity.latitude.between(request.getStartLat(),request.getEndLat()),
                            qShortsEntity.longitude.between(request.getStartLng(),request.getEndLng())
                         )
                    .fetch();
        }else{
            return jpaQueryFactory.selectFrom(qShortsEntity)
                    .where(qShortsEntity.isMapped.isTrue(),
                            eqLocationSi(request.getLocationSi()),
                            eqLocationGu(request.getLocationGu()),
                            eqLocationDong(request.getLocationDong()),
                            qShortsEntity.latitude.between(request.getStartLat(),request.getEndLat()),
                            qShortsEntity.longitude.between(request.getStartLng(),request.getEndLng()))
                    .fetch();
        }

    }

    private BooleanExpression eqLocationSi(String locationSi) {
        if (StringUtils.isEmpty(locationSi)) {
            return null;
        }
        return qShortsEntity.locationSi.eq(locationSi);
    }

    private BooleanExpression eqLocationGu(String locationGu) {
        if (StringUtils.isEmpty(locationGu)) {
            return null;
        }
        return qShortsEntity.locationGu.eq(locationGu);
    }

    private BooleanExpression eqLocationDong(String locationDong) {
        if (StringUtils.isEmpty(locationDong)) {
            return null;
        }
        return qShortsEntity.locationDong.eq(locationDong);
    }


    public Long getShortsCountByUsername(String username){
        return jpaQueryFactory.selectFrom(qShortsEntity).where(qShortsEntity.user.username.eq(username)).stream().count();
    }

//    public Page<ShortsEntity> getShortsRandomPage(Pageable pageable){
//        jpaQueryFactory.selectFrom(qShortsEntity)
//                .where(JPAExpressions
//                        .select(qShortsEntity.shortsId)
//                        .from(qShortsEntity)
//                                .where()
//
//                        )
//                .offset(pageable.getOffset()).limit(10)
//                .fetch();
//
//
//    }

    public List<Tuple> getShortsToUpdate(){
        return jpaQueryFactory.select(qShortsEntity,qLike)
                .from(qShortsEntity)
                .leftJoin(qLike).on(qShortsEntity.shortsId.eq(qLike.shorts.shortsId))
                .fetch();

    }


}
