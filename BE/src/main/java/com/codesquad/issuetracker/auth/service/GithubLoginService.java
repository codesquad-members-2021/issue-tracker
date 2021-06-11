package com.codesquad.issuetracker.auth.service;

import com.codesquad.issuetracker.auth.component.GitHubOauthIosValues;
import com.codesquad.issuetracker.auth.component.GitHubOauthValues;
import com.codesquad.issuetracker.auth.component.GitHubOauthWebValues;
import com.codesquad.issuetracker.auth.component.JwtUtils;
import com.codesquad.issuetracker.auth.dto.AccessTokenRequest;
import com.codesquad.issuetracker.auth.dto.AccessTokenResponse;
import com.codesquad.issuetracker.auth.dto.GitHubUser;
import com.codesquad.issuetracker.auth.dto.JwtResponse;
import com.codesquad.issuetracker.user.domain.User;
import com.codesquad.issuetracker.user.infra.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
public class GithubLoginService {

    private final GitHubOauthValues gitHubOauthWebValues;
    private final GitHubOauthValues gitHubOauthIosValues;

    private final String ACCESS_TOKEN_URI;
    private final String USER_URI;

    private final JwtUtils jwtUtils;
    private final UserRepository userRepository;

    public GithubLoginService(GitHubOauthWebValues gitHubOauthWebValues,
                              GitHubOauthIosValues gitHubOauthIosValues,
                              @Value("${auth.github.accessTokenUri}") String ACCESS_TOKEN_URI,
                              @Value("${auth.github.userUri}") String USER_URI,
                              JwtUtils jwtUtils,
                              UserRepository userRepository) {
        this.gitHubOauthWebValues = gitHubOauthWebValues;
        this.gitHubOauthIosValues = gitHubOauthIosValues;
        this.ACCESS_TOKEN_URI = ACCESS_TOKEN_URI;
        this.USER_URI = USER_URI;
        this.jwtUtils = jwtUtils;
        this.userRepository = userRepository;
    }

    public JwtResponse issueToken(String code, GitHubOauthValues gitHubOauthValues) {
        RestTemplate request = new RestTemplate();
        AccessTokenResponse accessToken = getAccessToken(code, gitHubOauthValues, request)
                .orElseThrow(() -> new RuntimeException("요청 바디 없음"));

        GitHubUser githubUser = getUserFromOauth(accessToken, request)
                .orElseThrow(() -> new RuntimeException("요청 바디 없음"));

        User user = userRepository.findByGitHubId(githubUser.getLogin())
                .orElseGet(() -> userRepository.save(User.fromGitHubUser(githubUser)));

        return new JwtResponse(jwtUtils.getJwt(user), "Bearer");
    }

    public JwtResponse issueJwtForWeb(String code) {
        return issueToken(code, gitHubOauthWebValues);
    }

    public JwtResponse issueTokenForIos(String code) {
        return issueToken(code, gitHubOauthIosValues);
    }

    private Optional<AccessTokenResponse> getAccessToken(String code, GitHubOauthValues gitHubOauthValues,
                                                         RestTemplate restTemplate) {
        RequestEntity<AccessTokenRequest> request = RequestEntity
                .post(ACCESS_TOKEN_URI)
                .header("Accept", "application/json")
                .body(new AccessTokenRequest(gitHubOauthValues.getClientId(),
                        gitHubOauthValues.getClientSecret(),
                        code,
                        gitHubOauthValues.getRedirectUri()));

        ResponseEntity<AccessTokenResponse> response = restTemplate
                .exchange(request, AccessTokenResponse.class);

        return Optional.ofNullable(response.getBody());
    }

    private Optional<GitHubUser> getUserFromOauth(AccessTokenResponse accessToken, RestTemplate gitHubRequest) {
        RequestEntity<Void> request = RequestEntity
                .get(USER_URI)
                .header("Accept", "application/json")
                .header("Authorization", "token " + accessToken.getAccessToken())
                .build();

        ResponseEntity<GitHubUser> response = gitHubRequest
                .exchange(request, GitHubUser.class);

        return Optional.ofNullable(response.getBody());
    }
}
