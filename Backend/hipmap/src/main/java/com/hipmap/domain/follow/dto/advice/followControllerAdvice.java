package com.hipmap.domain.follow.dto.advice;

import com.hipmap.domain.follow.Exception.FollowDuplicateException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class followControllerAdvice {
    @ExceptionHandler(FollowDuplicateException.class)
    public ResponseEntity<String> handleFollowDuplicate(){
        return ResponseEntity.status(HttpStatus.CONFLICT).body("이미 처리된 정보입니다.");
    }
}
