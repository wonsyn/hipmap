package com.hipmap.domain.shorts;

import com.hipmap.domain.shorts.request.GetMapListFilterRequest;
import com.hipmap.domain.shorts.response.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface ShortsService {

    Page<ShortsResponse> getShorts(Pageable pageable);

    List<GetShortsByLabelResponse> getShortsByLabel(String labeling);

    List<GetShortsByLabelResponse> getShortsByLabelAndLocation(Long userId, GetMapListFilterRequest request);

    Long getShortsCountByUsername(String username);

    Long deleteShorts(Long userId, Long shortsId);

    List<ShortsListEachUserResponse> getUserContents(String username);

    Long uploadFile(MultipartFile file, ShortsEntity shortsEntity) throws Exception;


    void updateMappedStates();

    String getThumbnail(ShortsIdAndLikeCntProjectionInterface m);

//    ShortsInfoResDto getShortsInfoByShortsId(Long shortsId);

}
