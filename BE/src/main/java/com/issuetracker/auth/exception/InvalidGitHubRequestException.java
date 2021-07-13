package com.issuetracker.auth.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidGitHubRequestException extends OAuthException {

    public InvalidGitHubRequestException() {
        super("GitHub request is not valid.");
    }
}
