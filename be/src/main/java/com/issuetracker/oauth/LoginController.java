package com.issuetracker.oauth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.issuetracker.util.Oauth;
import org.springframework.http.HttpEntity;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    private Oauth oauthUtil;

    public LoginController(Oauth oauthUtil) {
        this.oauthUtil = oauthUtil;
    }

    @GetMapping("/auth")
    public JwtDto login(@RequestParam String client, @RequestParam String code) {
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

        ResponseEntity<User> user = githubRequest.exchange(request, User.class);

        Algorithm algorithm = Algorithm.HMAC256(oauthUtil.getAlgorithmSecret());

        String jwt = JWT.create()
                .withClaim("id", user.getBody().getId())
                .withClaim("name", user.getBody().getLogin())
                .withClaim("avatar_url", user.getBody().getAvatar_url())
                .withIssuer(oauthUtil.getIssuer())
                .sign(algorithm);

        return new JwtDto(jwt);
    }

    @GetMapping("/hello")
    public void hell() {
        System.out.println("something");
    }
}

