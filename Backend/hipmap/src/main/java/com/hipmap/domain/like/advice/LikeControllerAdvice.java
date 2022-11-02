package com.hipmap.domain.like.advice;

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
    public ResponseEntity<String> LikeAlreadyExistsHandler() {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    @ExceptionHandler(LikeDuplicateProcessingException.class)
    public ResponseEntity<String> LikeDuplicateProcessingHandler() {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    @ExceptionHandler(LikeNotFoundException.class)
    public ResponseEntity<String> LikeNotFoundHandler() {
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
