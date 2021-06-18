package com.codesqaude.cocomarco.common.exception.notfound;

import com.codesqaude.cocomarco.common.exception.ErrorCode;

public class NotFoundUserException extends NotFoundException {

    public NotFoundUserException() {
        super(ErrorCode.NOT_FOUND_USER);
    }
}
