package com.codesqaude.cocomarco.common.exception.notfound;

import com.codesqaude.cocomarco.common.exception.ErrorCode;

public class NotFoundIssueException extends NotFoundException {

    public NotFoundIssueException() {
        super(ErrorCode.NOT_FOUND_ISSUE);
    }
}
