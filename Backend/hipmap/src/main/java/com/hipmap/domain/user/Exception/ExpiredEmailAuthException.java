package com.hipmap.domain.user.Exception;

public class ExpiredEmailAuthException extends RuntimeException {
    public ExpiredEmailAuthException() {
        super("인증 기간이 지났습니다.");
    }
}
