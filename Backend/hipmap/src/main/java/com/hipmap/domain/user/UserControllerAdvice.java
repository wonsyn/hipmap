package com.hipmap.domain.user;

import com.hipmap.domain.user.Exception.EmailDuplicatedException;
import com.hipmap.domain.user.Exception.ExpiredEmailAuthException;
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

    @ExceptionHandler(EmailDuplicatedException.class)
    public ResponseEntity<?> handleEmailDuplicatedException() {
        return ResponseEntity.badRequest().body("이미 가입된 이메일입니다.");
    }

    @ExceptionHandler(ExpiredEmailAuthException.class)
    public ResponseEntity<?> handleExpiredEmailAuthException() {
        return ResponseEntity.badRequest().body("인증 기간이 지났습니다.");
    }
}
