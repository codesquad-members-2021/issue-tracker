package com.issuetracker.auth.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class GitHubUserNotFoundException extends OAuthException {

    public GitHubUserNotFoundException() {
        super("GitHub user not found.");
    }
}
