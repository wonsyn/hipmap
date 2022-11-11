package com.hipmap.domain.user.Exception;

public class LoginFailException extends RuntimeException {
    public LoginFailException() {
        super("failed to login(invalid ID or password)");
    }
}
