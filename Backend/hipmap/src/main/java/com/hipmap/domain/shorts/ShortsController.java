package com.hipmap.domain.shorts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/shorts")
public class ShortsController {

    @Autowired
    ShortsService shortsService;

    @GetMapping()
    List<ShortsResDto> getShorts(Pageable pageable) {

        return shortsService.getShorts(pageable).getContent(); // 페이지 객체 어쩌구 : 필요함
    }



}
