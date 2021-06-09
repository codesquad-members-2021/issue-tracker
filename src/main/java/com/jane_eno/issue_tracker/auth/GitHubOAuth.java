package com.jane_eno.issue_tracker.auth;

import com.jane_eno.issue_tracker.auth.dto.AccessTokenRequestDTO;
import com.jane_eno.issue_tracker.auth.dto.AccessTokenResponseDTO;
import com.jane_eno.issue_tracker.auth.dto.GitHubUser;
import com.jane_eno.issue_tracker.auth.exception.AccessTokenNotFoundException;
import com.jane_eno.issue_tracker.auth.exception.GitHubUserNotFoundException;
import com.jane_eno.issue_tracker.auth.util.GitHubUtil;
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
    private final GitHubUtil gitHubUtil;

    @Value("${github.access.token.uri}")
    private String accessTokenUri;

    @Value("${github.user.uri}")
    private String userUri;

    private final HttpClient httpClient = HttpClient.create().resolver(DefaultAddressResolverGroup.INSTANCE);
    private final WebClient webClient = WebClient.builder().clientConnector(new ReactorClientHttpConnector(httpClient)).build();

    @Override
    public AccessTokenResponseDTO getToken(String code, String host) {
        AccessTokenRequestDTO accessTokenRequest = AccessTokenRequestDTO.builder()
                .clientId(gitHubUtil.verifyClientId(host))
                .clientSecret(gitHubUtil.verifyClientSecret(host))
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
    public GitHubUser getUserInfo(String accessToken) {
        return webClient.get()
                .uri(userUri)
                .accept(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, TOKEN + " " + accessToken)
                .retrieve()
                .bodyToMono(GitHubUser.class)
                .blockOptional()
                .orElseThrow(GitHubUserNotFoundException::new);
    }
}
