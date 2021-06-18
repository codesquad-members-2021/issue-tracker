package com.codesqaude.cocomarco.common.exception.notfound;

import com.codesqaude.cocomarco.common.exception.BusinessException;
import com.codesqaude.cocomarco.common.exception.ErrorCode;

public class NotFoundException extends BusinessException {

    public NotFoundException(ErrorCode errorCode) {
        super(errorCode);
    }
}
