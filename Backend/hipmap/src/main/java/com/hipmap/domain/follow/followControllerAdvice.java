package com.hipmap.domain.follow;

import com.hipmap.domain.follow.Exception.FollowDuplicateException;
import com.hipmap.domain.follow.Exception.FollowSameUserException;
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
    @ExceptionHandler(FollowSameUserException.class)
    public ResponseEntity<String> handleFollowSameUser(){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("요청된 유저 2명의 아이디가 같습니다.");
    }
}
