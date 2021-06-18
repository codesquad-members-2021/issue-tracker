package com.codesqaude.cocomarco.common.exception.auth;

import com.codesqaude.cocomarco.common.exception.BusinessException;
import com.codesqaude.cocomarco.common.exception.ErrorCode;

public class AuthException extends BusinessException {

    public AuthException(ErrorCode errorCode) {
        super(errorCode);
    }
}
