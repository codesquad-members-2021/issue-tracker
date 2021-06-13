package team02.issue_tracker.oauth.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import team02.issue_tracker.oauth.dto.GithubAccessTokenRequestDto;

@PropertySource("classpath:oauth.properties")
@Component
public class GithubApiProperties {

    private final String GITHUB_WEB_CLIENT_ID;
    private final String GITHUB_WEB_CLIENT_SECRET;
    private final String GITHUB_WEB_REDIRECT_URI;
    private final String GITHUB_IOS_CLIENT_ID;
    private final String GITHUB_IOS_CLIENT_SECRET;
    private final String GITHUB_IOS_REDIRECT_URI;
    private final String GITHUB_ACCESS_TOKEN_URI;
    private final String GITHUB_USER_INFO_URI;

    public GithubApiProperties(
            @Value("${oauth.github.web.client_id}") String GITHUB_WEB_CLIENT_ID,
            @Value("${oauth.github.web.client_secret}") String GITHUB_WEB_CLIENT_SECRET,
            @Value("${oauth.github.web.redirect_uri}") String GITHUB_WEB_REDIRECT_URI,
            @Value("${oauth.github.ios.client_id}") String GITHUB_IOS_CLIENT_ID,
            @Value("${oauth.github.ios.client_secret}") String GITHUB_IOS_CLIENT_SECRET,
            @Value("${oauth.github.ios.redirect_uri}") String GITHUB_IOS_REDIRECT_URI,
            @Value("${oauth.github.access_token_uri}") String GITHUB_ACCESS_TOKEN_URI,
            @Value("${oauth.github.user_info_uri}") String GITHUB_USER_INFO_URI) {
        this.GITHUB_WEB_CLIENT_ID = GITHUB_WEB_CLIENT_ID;
        this.GITHUB_WEB_CLIENT_SECRET = GITHUB_WEB_CLIENT_SECRET;
        this.GITHUB_WEB_REDIRECT_URI = GITHUB_WEB_REDIRECT_URI;
        this.GITHUB_IOS_CLIENT_ID = GITHUB_IOS_CLIENT_ID;
        this.GITHUB_IOS_CLIENT_SECRET = GITHUB_IOS_CLIENT_SECRET;
        this.GITHUB_IOS_REDIRECT_URI = GITHUB_IOS_REDIRECT_URI;
        this.GITHUB_ACCESS_TOKEN_URI = GITHUB_ACCESS_TOKEN_URI;
        this.GITHUB_USER_INFO_URI = GITHUB_USER_INFO_URI;
    }

    public String accessTokenUri() {
        return GITHUB_ACCESS_TOKEN_URI;
    }

    public String userInfoUri() {
        return GITHUB_USER_INFO_URI;
    }

    public GithubAccessTokenRequestDto accessTokenRequestForWeb(String code) {
        return GithubAccessTokenRequestDto.builder()
                .clientId(GITHUB_WEB_CLIENT_ID)
                .clientSecret(GITHUB_WEB_CLIENT_SECRET)
                .redirectUri(GITHUB_WEB_REDIRECT_URI)
                .code(code)
                .build();
    }

    public GithubAccessTokenRequestDto accessTokenRequestForIos(String code) {
        return GithubAccessTokenRequestDto.builder()
                .clientId(GITHUB_IOS_CLIENT_ID)
                .clientSecret(GITHUB_IOS_CLIENT_SECRET)
                .redirectUri(GITHUB_IOS_REDIRECT_URI)
                .code(code)
                .build();
    }
}
