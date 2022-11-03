package com.hipmap.domain.like.dto.advice;

import com.hipmap.domain.like.Exception.LikeAlreadyExistsException;
import com.hipmap.domain.like.Exception.LikeDuplicateProcessingException;
import com.hipmap.domain.like.Exception.LikeNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class LikeControllerAdvice {

    @ExceptionHandler(LikeAlreadyExistsException.class)
    public ResponseEntity<String> handleLikeAlreadyExistsException(){
        return ResponseEntity.status(HttpStatus.CONFLICT).body("이미 투표를 완료한 영상입니다.");
    }
    @ExceptionHandler(LikeDuplicateProcessingException.class)
    public ResponseEntity<String> handleLikeDuplicateProcessingException(){
        return ResponseEntity.status(HttpStatus.CONFLICT).body("이미 같은 투표를 완료하였습니다.");
    }
    @ExceptionHandler(LikeNotFoundException.class)
    public ResponseEntity<String> handleLikeNotFoundException(){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("해당하는 투표를 찾을 수 없습니다.");
    }
}
