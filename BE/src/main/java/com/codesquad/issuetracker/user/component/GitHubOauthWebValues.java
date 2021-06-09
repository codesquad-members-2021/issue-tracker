package com.codesquad.issuetracker.user.component;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class GitHubOauthWebValues implements GitHubOauthValues {
    private final String clientId;
    private final String clientSecret;
    private final String redirectUri;

    public GitHubOauthWebValues(@Value("${auth.github.web.clientId}") String clientId,
                                @Value("${auth.github.web.clientSecret}") String clientSecret,
                                @Value("${auth.github.web.redirectUri}") String redirectUri) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.redirectUri = redirectUri;
    }
}
