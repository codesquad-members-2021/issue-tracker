package com.codesqaude.cocomarco.common.exception.auth;

import com.codesqaude.cocomarco.common.exception.ErrorCode;

public class NotLoggedInException extends AuthException {

    public NotLoggedInException() {
        super(ErrorCode.NOT_LOGGED_IN);
    }
}
