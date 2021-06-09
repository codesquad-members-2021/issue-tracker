package com.codesquad.issuetracker.user.component;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class GitHubOauthIosValues implements GitHubOauthValues {
    private final String clientId;
    private final String clientSecret;
    private final String redirectUri;

    public GitHubOauthIosValues(@Value("${auth.github.ios.clientId}") String clientId,
                                @Value("${auth.github.ios.clientSecret}") String clientSecret,
                                @Value("${auth.github.ios.redirectUri}") String redirectUri) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.redirectUri = redirectUri;
    }
}
