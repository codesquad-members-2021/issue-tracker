package team02.issue_tracker.oauth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import team02.issue_tracker.oauth.dto.GithubAccessTokenRequestDto;
import team02.issue_tracker.oauth.dto.GithubAccessTokenResponseDto;
import team02.issue_tracker.oauth.dto.GithubUserProfile;

@Slf4j
@PropertySource("classpath:oauth.properties")
@Service
public class OAuthService {

    @Value("${oauth.github.client_id}")
    private String GITHUB_CLIENT_ID;

    @Value("${oauth.github.client_secret}")
    private String GITHUB_CLIENT_SECRET;

    @Value("${oauth.github.access_token_uri}")
    private String GITHUB_ACCESS_TOKEN_URI;

    @Value("${oauth.github.redirect_uri.web}")
    private String GITHUB_REDIRECT_URI;

    @Value("${oauth.github.user_info_uri}")
    private String GITHUB_USER_INFO_URI;

    public GithubUserProfile githubUserProfileFrom(String code) {
        return githubUserProfileFrom(accessTokenFrom(code));
    }

    private GithubAccessTokenResponseDto accessTokenFrom(String code) {
        GithubAccessTokenRequestDto githubAccessTokenRequestDto =
                GithubAccessTokenRequestDto.builder()
                        .clientId(GITHUB_CLIENT_ID)
                        .clientSecret(GITHUB_CLIENT_SECRET)
                        .code(code)
                        .redirectUri(GITHUB_REDIRECT_URI)
                        .build();

        RequestEntity<GithubAccessTokenRequestDto> request = RequestEntity
                .post(GITHUB_ACCESS_TOKEN_URI)
                .header("Accept", "application/json")
                .body(githubAccessTokenRequestDto);

        ResponseEntity<GithubAccessTokenResponseDto> response =
                new RestTemplate().exchange(request, GithubAccessTokenResponseDto.class);

        log.info("access token dto : {}", response.getBody().toString());
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
