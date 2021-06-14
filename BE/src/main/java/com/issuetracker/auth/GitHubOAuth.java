package com.issuetracker.auth;

import com.issuetracker.auth.exception.AccessTokenNotFoundException;
import com.issuetracker.auth.exception.GitHubUserNotFoundException;
import com.issuetracker.auth.dto.AccessTokenRequestDTO;
import com.issuetracker.auth.dto.AccessTokenResponseDTO;
import com.issuetracker.auth.dto.GitHubUserResponseDTO;
import com.issuetracker.auth.service.GitHubService;
import io.netty.resolver.DefaultAddressResolverGroup;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.netty.http.client.HttpClient;

@Component
@RequiredArgsConstructor
public class GitHubOAuth implements OAuth {

    private static final String TOKEN = "token";
    private final GitHubService gitHubService;
    private final WebClient webClient;

    @Value("${github.access.token.uri}")
    private String accessTokenUri;

    @Value("${github.user.uri}")
    private String userUri;

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
                .bodyToMono(AccessTokenResponseDTO.class)
                .blockOptional()
                .orElseThrow(AccessTokenNotFoundException::new);
    }

    @Override
    public GitHubUserResponseDTO getUserInfo(String accessToken) {
        return webClient.get()
                .uri(userUri)
                .accept(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, TOKEN + " " + accessToken)
                .retrieve()
                .bodyToMono(GitHubUserResponseDTO.class)
                .blockOptional()
                .orElseThrow(GitHubUserNotFoundException::new);
    }
}
