package com.hipmap.domain.jwt.Exception;

public class IllegalTokenException extends RuntimeException{
    public IllegalTokenException(String msg) {
        super(msg);
    }
}
