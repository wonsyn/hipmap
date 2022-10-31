package com.hipmap.domain.user;

import com.hipmap.domain.user.Exception.LoginFailException;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserControllerAdvice {
    @ExceptionHandler(LoginFailException.class)
    public ResponseEntity<?> handleLoginFailException() {
        return ResponseEntity.noContent().build();
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<?> handleUserNotFoundException() {
        return ResponseEntity.badRequest().body("해당하는 유저를 찾을 수 없습니다.");
    }
}
