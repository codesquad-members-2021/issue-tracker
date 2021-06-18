package com.codesqaude.cocomarco.common.exception.notfound;

import com.codesqaude.cocomarco.common.exception.ErrorCode;

public class NotFoundMilestoneException extends NotFoundException {

    public NotFoundMilestoneException() {
        super(ErrorCode.NOT_FOUND_MILESTONE);
    }
}
