package com.hipmap.domain.shorts;

import com.hipmap.domain.shorts.dto.request.CreateShortsRequest;
import com.hipmap.domain.shorts.dto.request.GetMapListFilterRequest;
import com.hipmap.domain.shorts.dto.response.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface ShortsService {

    Page<ShortsResponse> getShorts(Pageable pageable, Long userId);

    List<GetShortsByLabelResponse> getShortsByLabel(String labeling);

    List<GetShortsByLabelAndLocResponse> getShortsByLabelAndLocation(Long userId, GetMapListFilterRequest request);

    Long getShortsCountByUsername(String username);

    Long deleteShorts(Long userId, Long shortsId);

    List<ShortsListEachUserResponse> getUserContents(String username);

    Long uploadFile(MultipartFile file, CreateShortsRequest request, Long user) throws Exception;


//    void updateMappedStates();

    //    @Scheduled(cron = "0 0 0 * * ?") // 스케쥴링 예정 - 잘됨

    void updateMappedStates();

    String getThumbnail(ShortsIdAndLikeCntProjectionInterface m);

    ShortsInfoResponse getShortsInfoByShortsId(Long shortsId);

}
