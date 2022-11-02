package com.hipmap.domain.follow.Exception;

public class FollowDuplicateException extends RuntimeException{
    public FollowDuplicateException() {
    }

    public FollowDuplicateException(String message) {
        super(message);
    }

    public FollowDuplicateException(String message, Throwable cause) {
        super(message, cause);
    }

    public FollowDuplicateException(Throwable cause) {
        super(cause);
    }

    public FollowDuplicateException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
