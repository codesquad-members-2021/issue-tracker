package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.response.AccessTokenResponse;
import com.codesquad.issuetracker.component.JwtProvider;
import com.codesquad.issuetracker.domain.User;
import com.codesquad.issuetracker.domain.oauth.GitHubUser;
import com.codesquad.issuetracker.repository.UserRepository;
import com.codesquad.issuetracker.request.AccessTokenRequest;
import com.codesquad.issuetracker.response.GitHubUserResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
@Slf4j
public class GitHubLoginService {

    private final UserRepository userRepository;

    private final JwtProvider jwtProvider;

    private static final String GITHUB_ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token";
    private static final String GITHUB_USER_URL = "https://api.github.com/user";
    private final String GITHUB_CLIENT_ID;
    private final String GITHUB_CLIENT_SECRETS;
    private final String GITHUB_CLIENT_ID_IOS;
    private final String GITHUB_CLIENT_SECRETS_IOS;

    public GitHubLoginService(UserRepository userRepository, JwtProvider jwtProvider, Environment environment) {
        this.jwtProvider = jwtProvider;
        this.userRepository = userRepository;
        this.GITHUB_CLIENT_ID = environment.getProperty("github.client.id");
        this.GITHUB_CLIENT_SECRETS = environment.getProperty("github.client.secrets");
        this.GITHUB_CLIENT_ID_IOS = environment.getProperty("github.client.id.ios");
        this.GITHUB_CLIENT_SECRETS_IOS = environment.getProperty("github.client.secrets.ios");
    }

    public GitHubUserResponse login(String code) {
        AccessTokenResponse accessTokenResponse = accessTokenForWeb(code).orElseThrow(IllegalArgumentException::new);
        log.debug("Web Access token : {}", accessTokenResponse.getAccessToken());

        GitHubUser user = getUserInfo(accessTokenResponse.getAccessToken()).orElseThrow(IllegalArgumentException::new);
        return signIn(user, accessTokenResponse.getTokenType());
    }

    public GitHubUserResponse loginIOS(String code) {
        AccessTokenResponse accessTokenResponse = accessTokenForIOS(code).orElseThrow(IllegalArgumentException::new);
        log.debug("iOS Access token : {}", accessTokenResponse.getAccessToken());

        GitHubUser user = getUserInfo(accessTokenResponse.getAccessToken()).orElseThrow(IllegalArgumentException::new);
        return signIn(user, accessTokenResponse.getTokenType());
    }

    private Optional<AccessTokenResponse> accessTokenForWeb(String code) {
        RequestEntity<AccessTokenRequest> accessTokenRequestEntity = RequestEntity.post(GITHUB_ACCESS_TOKEN_URL) // 보낼 request를 만듦
                .header("Accept", "application/json")// 받아올 리턴 값을 json형식으로 설정
                .body(AccessTokenRequest.create(GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRETS, code));

        return Optional.ofNullable(
                new RestTemplate()
                        .exchange(accessTokenRequestEntity, AccessTokenResponse.class)
                        .getBody()); // 액세스토큰 받아오기
    }

    private Optional<AccessTokenResponse> accessTokenForIOS(String code) {
        RequestEntity<AccessTokenRequest> accessTokenRequestEntity = RequestEntity.post(GITHUB_ACCESS_TOKEN_URL)
                .header("Accept", "application/json")
                .body(AccessTokenRequest.create(GITHUB_CLIENT_ID_IOS, GITHUB_CLIENT_SECRETS_IOS, code));

        return Optional.ofNullable(
                new RestTemplate()
                        .exchange(accessTokenRequestEntity, AccessTokenResponse.class)
                        .getBody());
    }

    private Optional<GitHubUser> getUserInfo(String accessToken) {
        RequestEntity<Void> githubUserInfoRequestEntity = RequestEntity.get(GITHUB_USER_URL)// body에 아무것도 보내지 않으므로 Void로 설정
                .header("Accept", "application/json")
                .header("Authorization", "token " + accessToken)
                .build();

        return Optional.ofNullable(
                new RestTemplate()
                        .exchange(githubUserInfoRequestEntity, GitHubUser.class)
                        .getBody());
    }

    private Optional<User> signUp(GitHubUser gitHubUser) {
        log.debug("github user : {}", gitHubUser);
        if (!userRepository.findByLoginId(gitHubUser.getLogin()).isPresent()) {
            User user = User.githubUserToUser(gitHubUser);
            log.debug("User : {} ", user);
            userRepository.save(user);
        }
        return userRepository.findByLoginId(gitHubUser.getLogin());
    }

    private GitHubUserResponse signIn(GitHubUser gitHubUser, String type) {
        User user = signUp(gitHubUser).orElseThrow(IllegalArgumentException::new);
        String jwt = jwtProvider.createJwt(user);
        return GitHubUserResponse.create(jwt, user, type);
    }

}
