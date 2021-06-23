package com.codesqaude.cocomarco.common.exception.notfound;

import com.codesqaude.cocomarco.common.exception.ErrorCode;

public class NotFoundCommentException extends NotFoundException {

    public NotFoundCommentException() {
        super(ErrorCode.NOT_FOUND_COMMENT);
    }
}
