package com.codesqaude.cocomarco.common.exception.auth;

import com.codesqaude.cocomarco.common.exception.ErrorCode;

public class NoPermissionUserException extends AuthException {
    public NoPermissionUserException() {
        super(ErrorCode.NO_PERMISSION_USER);
    }
}
