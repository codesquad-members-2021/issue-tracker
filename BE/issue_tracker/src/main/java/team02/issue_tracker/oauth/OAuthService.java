package team02.issue_tracker.oauth;

import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.*;
import team02.issue_tracker.service.UserService;

@Slf4j
@PropertySource("classpath:oauth.properties")
@Service
public class OAuthService {

    @Value("${oauth.github.web.client_id}")
    private String GITHUB_WEB_CLIENT_ID;

    @Value("${oauth.github.web.client_secret}")
    private String GITHUB_WEB_CLIENT_SECRET;

    @Value("${oauth.github.web.redirect_uri}")
    private String GITHUB_WEB_REDIRECT_URI;

    @Value("${oauth.github.ios.client_id}")
    private String GITHUB_IOS_CLIENT_ID;

    @Value("${oauth.github.ios.client_secret}")
    private String GITHUB_IOS_CLIENT_SECRET;

    @Value("${oauth.github.ios.redirect_uri}")
    private String GITHUB_IOS_REDIRECT_URI;

    @Value("${oauth.github.access_token_uri}")
    private String GITHUB_ACCESS_TOKEN_URI;

    @Value("${oauth.github.user_info_uri}")
    private String GITHUB_USER_INFO_URI;

    private final UserService userService;
    private final JwtUtils jwtUtils;

    public OAuthService(UserService userService, JwtUtils jwtUtils) {
        this.userService = userService;
        this.jwtUtils = jwtUtils;
    }

    public AuthJwt issueJwtForWeb(String code) {
        GithubUserProfile githubUserProfile = githubUserProfileFrom(
                GITHUB_WEB_CLIENT_ID, GITHUB_WEB_CLIENT_SECRET, GITHUB_WEB_REDIRECT_URI, code);
        return jwtUtils.getJwt(userFrom(githubUserProfile));
    }

    public AuthJwt issueJwtForIos(String code) {
        GithubUserProfile githubUserProfile = githubUserProfileFrom(
                GITHUB_IOS_CLIENT_ID, GITHUB_IOS_CLIENT_SECRET, GITHUB_IOS_REDIRECT_URI, code);
        return jwtUtils.getJwt(userFrom(githubUserProfile));
    }

    private User userFrom(SocialProfile socialProfile) {
        User userSocialProfile = socialProfile.becomeUser();
        User user = userService.findByUser(userSocialProfile);
        if (user == null) {
            user = userService.enroll(userSocialProfile);
        }
        return user;
    }

    private GithubUserProfile githubUserProfileFrom(
            String clientId, String clientSecret, String redirectUri, String code) {
        return githubUserProfileFrom(accessTokenFrom(clientId, clientSecret, redirectUri, code));
    }

    private GithubAccessTokenResponseDto accessTokenFrom(
            String clientId, String clientSecret, String redirectUri, String code) {
        GithubAccessTokenRequestDto githubAccessTokenRequestDto =
                GithubAccessTokenRequestDto.builder()
                        .clientId(clientId)
                        .clientSecret(clientSecret)
                        .redirectUri(redirectUri)
                        .code(code)
                        .build();

        RequestEntity<GithubAccessTokenRequestDto> request = RequestEntity
                .post(GITHUB_ACCESS_TOKEN_URI)
                .header("Accept", "application/json")
                .body(githubAccessTokenRequestDto);

        ResponseEntity<GithubAccessTokenResponseDto> response =
                new RestTemplate().exchange(request, GithubAccessTokenResponseDto.class);
        return response.getBody();
    }

    private GithubUserProfile githubUserProfileFrom(
            GithubAccessTokenResponseDto githubAccessTokenResponseDto) {
        RequestEntity githubUserProfileRequest = RequestEntity
                .get(GITHUB_USER_INFO_URI)
                .header("Authorization"
                        , "token " + githubAccessTokenResponseDto.getAccessToken())
                .build();

        ResponseEntity<GithubUserProfile> githubUserProfileResponse =
                new RestTemplate().exchange(githubUserProfileRequest, GithubUserProfile.class);
        GithubUserProfile githubUserProfile = githubUserProfileResponse.getBody();
        log.info("github user profile : {}", githubUserProfile.toString());
        return githubUserProfile;
    }
}
