package com.team11.issue.oauth;

import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:/oauth.properties")
public class GitHubOauthConfig {

    private static final String FE_CLIENT_ID = "fe_client_id";
    private static final String FE_CLIENT_SECRET = "fe_client_secret";

    private static final String IOS_CLIENT_ID = "ios_client_id";
    private static final String IOS_CLIENT_SECRET = "ios_client_secret";

    private String clientId;
    private String clientSecret;

    private final Environment environment;

    enum GitHubUrl {

        ACCESS_TOKEN_URL("https://github.com/login/oauth/access_token"),
        USER_INFO_URL("https://api.github.com/user");

        private final String url;

        GitHubUrl(String url) {
            this.url = url;
        }

        public String getUrl() {
            return url;
        }
    }

    public GitHubOauthConfig(Environment environment) {
        this.environment = environment;
    }

    public void setGitHubOauthInfo(String type) {
        if (type.equals("fe")) {
            this.clientId = environment.getProperty(FE_CLIENT_ID);
            this.clientSecret = environment.getProperty(FE_CLIENT_SECRET);
        }
        if (type.equals("ios")) {
            this.clientId = environment.getProperty(IOS_CLIENT_ID);
            this.clientSecret = environment.getProperty(IOS_CLIENT_SECRET);
        }
    }

    public String getClientId() {
        return clientId;
    }

    public String getClientSecret() {
        return clientSecret;
    }

}
