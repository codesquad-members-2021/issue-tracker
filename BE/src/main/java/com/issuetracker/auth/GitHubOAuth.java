package com.issuetracker.auth;

import com.issuetracker.auth.exception.AccessTokenNotFoundException;
import com.issuetracker.auth.exception.InvalidGitHubRequestException;
import com.issuetracker.auth.exception.GitHubUserNotFoundException;
import com.issuetracker.auth.dto.AccessTokenRequestDTO;
import com.issuetracker.auth.dto.AccessTokenResponseDTO;
import com.issuetracker.auth.dto.OAuthUserResponseDTO;
import com.issuetracker.auth.service.GitHubService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class GitHubOAuth implements OAuth {

    private static final String TOKEN = "token";
    private final GitHubService gitHubService;
    private final WebClient webClient;
    private final String accessTokenUri;
    private final String userUri;

    public GitHubOAuth(GitHubService gitHubService,
                       WebClient webClient,
                       @Value("${github.access.token.uri}") String accessTokenUri,
                       @Value("${github.user.uri}") String userUri) {
        this.gitHubService = gitHubService;
        this.webClient = webClient;
        this.accessTokenUri = accessTokenUri;
        this.userUri = userUri;
    }

    @Override
    public AccessTokenResponseDTO getToken(String code, String userAgent) {
        AccessTokenRequestDTO accessTokenRequest = AccessTokenRequestDTO.builder()
                .clientId(gitHubService.getClientId(userAgent))
                .clientSecret(gitHubService.getClientSecret(userAgent))
                .code(code)
                .build();

        return webClient.post()
                .uri(accessTokenUri)
                .accept(MediaType.APPLICATION_JSON)
                .bodyValue(accessTokenRequest)
                .retrieve()
                .onStatus(HttpStatus::is4xxClientError, error -> Mono.error(InvalidGitHubRequestException::new))
                .bodyToMono(AccessTokenResponseDTO.class)
                .blockOptional()
                .orElseThrow(AccessTokenNotFoundException::new);
    }

    @Override
    public OAuthUserResponseDTO getUserInfo(String accessToken) {
        return webClient.get()
                .uri(userUri)
                .accept(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, TOKEN + " " + accessToken)
                .retrieve()
                .onStatus(HttpStatus::is4xxClientError, error -> Mono.error(InvalidGitHubRequestException::new))
                .bodyToMono(OAuthUserResponseDTO.class)
                .blockOptional()
                .orElseThrow(GitHubUserNotFoundException::new);
    }
}
