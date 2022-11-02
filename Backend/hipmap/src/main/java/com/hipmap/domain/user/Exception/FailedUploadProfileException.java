package com.hipmap.domain.user.Exception;

public class FailedUploadProfileException extends RuntimeException{
    public FailedUploadProfileException() {
        super("프로필 이미지 업로드 실패");
    }
}
