package com.hipmap.domain.jwt;

import com.hipmap.domain.jwt.Exception.IllegalTokenException;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class JwtControllerAdvice {

    @ExceptionHandler(ExpiredJwtException.class)
    public ResponseEntity<?> handleExpiredJwtException() {
        Map<String, String> map = new HashMap<>();
        map.put("message", "Expired Token");
        return ResponseEntity.status(401).body(map);
    }

    @ExceptionHandler(IllegalTokenException.class)
    public ResponseEntity<?> handleIllegalTokenException() {
        Map<String, String> map = new HashMap<>();
        map.put("message", "Illegal Token");
        return ResponseEntity.status(401).body(map);
    }
}
