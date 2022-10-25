package com.hipmap.domain.shorts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;



@Service
public class ShortsServiceImpl implements ShortsService{

    @Autowired
    ShortsRepository shortsRepository;

    @Override
    public Page<ShortsEntity> getShorts(Pageable pageable) {
        return shortsRepository.findAll(pageable);
    }


}
