package com.issuetracker.util;

import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:/oauth.properties")
public class Oauth {

    private final Environment environment;

    public Oauth(Environment environment) {
        this.environment = environment;
    }

    private static final String USERINFO_URI = "github.access.user.url";
    private static final String LOGIN_URI = "github.authorize.url";
    private static final String REDIRECT_URI = "github.callback.url";
    private static final String TOKEN_URI = "github.access.token.url";
    public static final String CLIENT_ID = "github.client.id";
    public static final String CLIENT_SECRET = "github.secret";
    public static final String SCOPE = "github.scope";

    public static final String ALGORITHM_SECRET = "jwt.algorithm.secret";
    public static final String ISSUER = "jwt.issuer";

    private String access_token;

    public String getClientId() {
        return environment.getProperty(CLIENT_ID);
    }

    public String getClientSecret() {
        return environment.getProperty(CLIENT_SECRET);
    }

    public String getRedirectUri() {
        return environment.getProperty(REDIRECT_URI);
    }

    public String getUserinfoUri() {
        return environment.getProperty(USERINFO_URI);
    }

    public String getAlgorithmSecret() {
        return environment.getProperty(ALGORITHM_SECRET);
    }

    public String getIssuer() {
        return environment.getProperty(ISSUER);
    }

    public String getUriForAccesToken(String code) {
        return environment.getProperty(TOKEN_URI) + "?client_id="
                + getClientId() + "&client_secret=" + getClientSecret()
                + "&code=" + code;
    }
}

