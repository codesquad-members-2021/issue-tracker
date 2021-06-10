package com.issuetracker.oauth;

import com.issuetracker.util.Oauth;
import org.springframework.http.HttpEntity;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    private Oauth oauthUtil;

    public LoginController(Oauth oauthUtil) {
        this.oauthUtil = oauthUtil;
    }

    @GetMapping("/auth")
    public void login(@RequestParam String client, @RequestParam String code) {
        RestTemplate githubRequest = new RestTemplate();
        String accessTokenUri = oauthUtil.getUriForAccesToken(code);

        RequestEntity<GithubAccessTokenRequestDto> requestDto = RequestEntity
                .post(accessTokenUri)
                .header("Accept", "application/json")
                .body(new GithubAccessTokenRequestDto(
                        oauthUtil.getClientId(), oauthUtil.getClientSecret(), code, oauthUtil.getRedirectUri()
                ));

        ResponseEntity<GithubAccessTokenResponseDto> responseDto = githubRequest.exchange(requestDto, GithubAccessTokenResponseDto.class);

        RequestEntity<Void> request = RequestEntity
                .get(oauthUtil.getUserinfoUri())
                .header("Accept", "application/json")
                .header("Authorization", "token " + responseDto.getBody().getAccessToken())
                .build();

    }
}

