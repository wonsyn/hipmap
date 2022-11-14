package com.hipmap.domain.user.Exception;

import com.amazonaws.services.kms.model.NotFoundException;

public class EmailAuthNotFoundException extends NotFoundException {
    public EmailAuthNotFoundException(String msg) {
        super(msg);
    }
}
