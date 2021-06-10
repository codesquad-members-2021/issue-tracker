package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.AccessTokenResponse;
import com.codesquad.issuetracker.component.JwtProvider;
import com.codesquad.issuetracker.domain.User;
import com.codesquad.issuetracker.domain.oauth.GitHubUser;
import com.codesquad.issuetracker.repository.UserRepository;
import com.codesquad.issuetracker.request.AccessTokenRequest;
import com.codesquad.issuetracker.response.GitHubLoginResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.env.Environment;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
public class GitHubLoginService {

    private final UserRepository userRepository;

    private final JwtProvider jwtProvider;

    private Logger logger = LoggerFactory.getLogger(GitHubLoginService.class);

    private static final String GITHUB_ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token";
    private static final String GITHUB_USER_URL = "https://api.github.com/user";
    private final String GITHUB_CLIENT_ID;
    private final String GITHUB_CLIENT_SECRETS;

    public GitHubLoginService(UserRepository userRepository, JwtProvider jwtProvider, Environment environment) {
        this.jwtProvider = jwtProvider;
        this.userRepository = userRepository;
        this.GITHUB_CLIENT_ID = environment.getProperty("github.client.id");
        this.GITHUB_CLIENT_SECRETS = environment.getProperty("github.client.secrets");
    }

    public GitHubLoginResponse login(String code) {
        AccessTokenResponse accessTokenResponse = accessToken(code).orElseThrow(IllegalArgumentException::new);
        logger.debug("Access token : {}", accessTokenResponse.getAccessToken());
        GitHubUser user = getUserInfo(accessTokenResponse.getAccessToken()).orElseThrow(IllegalArgumentException::new);
        return signIn(user);
    }

    private Optional<AccessTokenResponse> accessToken(String code) {
        RequestEntity<AccessTokenRequest> accessTokenRequestEntity = RequestEntity.post(GITHUB_ACCESS_TOKEN_URL) // 보낼 request를 만듦
                .header("Accept", "application/json")// 받아올 리턴 값을 json형식으로 설정
                .body(AccessTokenRequest.create(GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRETS, code));

        return Optional.ofNullable(
                new RestTemplate()
                        .exchange(accessTokenRequestEntity, AccessTokenResponse.class)
                        .getBody()); // 액세스토큰 받아오기
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
        logger.debug("github user : {}", gitHubUser);
        if (!userRepository.findByUserId(gitHubUser.getLogin()).isPresent()) {
            User user = User.githubUserToUser(gitHubUser);
            logger.debug("User : {} ", user);
            userRepository.save(user);
        }
        return userRepository.findByUserId(gitHubUser.getLogin());
    }

    private GitHubLoginResponse signIn(GitHubUser gitHubUser) {
        User user = signUp(gitHubUser).orElseThrow(IllegalArgumentException::new);
        String jwt = jwtProvider.createJwt(user.getId());
        return GitHubLoginResponse.create(jwt, user);
    }

}
