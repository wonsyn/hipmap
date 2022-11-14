package com.hipmap.domain.user.Exception;

public class EmailDuplicatedException extends RuntimeException {
    public EmailDuplicatedException() {
        super("이미 존재하는 이메일 입니다.");
    }
}
