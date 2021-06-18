package com.codesqaude.cocomarco.common.exception.notfound;

import com.codesqaude.cocomarco.common.exception.ErrorCode;

public class NotFoundLabelException extends NotFoundException {

    public NotFoundLabelException() {
        super(ErrorCode.NOT_FOUND_LABEL);
    }
}
