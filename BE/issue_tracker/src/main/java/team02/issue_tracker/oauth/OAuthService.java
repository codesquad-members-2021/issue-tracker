package team02.issue_tracker.oauth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import team02.issue_tracker.oauth.dto.GithubAccessTokenRequestDto;
import team02.issue_tracker.oauth.dto.GithubAccessTokenResponseDto;
import team02.issue_tracker.oauth.dto.GithubUserProfile;

@Slf4j
@Service
public class OAuthService {

    private final String GITHUB_CLIENT_ID = "8f053229e25de08ed09d";
    private final String GITHUB_CLIENT_SECRET = "7be948f2baabb4510d611bf720ea22b7965d1098";
    private final String GITHUB_ACCESS_TOKEN_URI = "https://github.com/login/oauth/access_token";
    private final String GITHUB_REDIRECT_URI = "http://localhost:8080/api/oauth/github/callback";
    private final String GITHUB_USER_INFO_URI = "https://api.github.com/user";

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
