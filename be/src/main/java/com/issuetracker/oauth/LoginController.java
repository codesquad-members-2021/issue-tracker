package com.issuetracker.oauth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.issuetracker.repository.UserRepository;
import com.issuetracker.util.Oauth;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    private Logger logger = LoggerFactory.getLogger(LoginController.class);
    private final Oauth oauthUtil;
    private final UserRepository userRepository;

    public LoginController(Oauth oauthUtil, UserRepository userRepository) {
        this.oauthUtil = oauthUtil;
        this.userRepository = userRepository;
    }

    @GetMapping("/auth")
    public JwtDto login(@RequestParam String client, @RequestParam String code) {
        RestTemplate githubRequest = new RestTemplate();
        String accessTokenUri = null;
        String clientId = null;
        String secretId = null;
        String redirectUri = null;

        if (client.equals("ios")) {
            accessTokenUri = oauthUtil.getUriForAccesTokenIos(code);
            clientId = oauthUtil.getClientIdIos();
            secretId = oauthUtil.getClientSecretIos();
            redirectUri = oauthUtil.getRedirectUriIos();
        }

        if (client.equals("web")) {
            accessTokenUri = oauthUtil.getUriForAccesToken(code);
            clientId = oauthUtil.getClientId();
            secretId = oauthUtil.getClientSecret();
            redirectUri = oauthUtil.getRedirectUri();
        }

        RequestEntity<GithubAccessTokenRequestDto> requestDto = RequestEntity
                .post(accessTokenUri)
                .header("Accept", "application/json")
                .body(new GithubAccessTokenRequestDto(
                        clientId, secretId, code, redirectUri
                ));

        logger.info("requestDto: {} ", requestDto);

        ResponseEntity<GithubAccessTokenResponseDto> responseDto = githubRequest.exchange(requestDto, GithubAccessTokenResponseDto.class);

        RequestEntity<Void> request = RequestEntity
                .get(oauthUtil.getUserinfoUri())
                .header("Accept", "application/json")
                .header("Authorization", "token " + responseDto.getBody().getAccessToken())
                .build();

        ResponseEntity<User> user = githubRequest.exchange(request, User.class);

        User loginUser = user.getBody();
        if (!userRepository.hasSameUserId(loginUser.getId())) {
            userRepository.save(loginUser);
        }

        Algorithm algorithm = Algorithm.HMAC256(oauthUtil.getAlgorithmSecret());

        String jwt = JWT.create()
                .withClaim("id", user.getBody().getId())
                .withClaim("name", user.getBody().getLogin())
                .withClaim("avatar_url", user.getBody().getAvatar_url())
                .withIssuer(oauthUtil.getIssuer())
                .sign(algorithm);

        return new JwtDto(jwt);
    }
}

