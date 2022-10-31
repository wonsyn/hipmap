package com.hipmap.domain.user;

import com.hipmap.domain.user.Exception.LoginFailException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserControllerAdvice {
    @ExceptionHandler(LoginFailException.class)
    public ResponseEntity<?> handleLoginFailException() {
        return ResponseEntity.noContent().build();
    }
}
