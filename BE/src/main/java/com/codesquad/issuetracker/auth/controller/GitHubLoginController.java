package com.codesquad.issuetracker.auth.controller;

import com.codesquad.issuetracker.auth.UserPlatform;
import com.codesquad.issuetracker.auth.domain.JwtAuthenticationInfo;
import com.codesquad.issuetracker.auth.service.LoginService;
import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.auth.response.GitHubUserResponse;
import com.codesquad.issuetracker.auth.service.GitHubOauthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class GitHubLoginController {

    private Logger logger = LoggerFactory.getLogger(GitHubLoginController.class);

    private final GitHubOauthService gitHubOauthService;
    private final LoginService loginService;

    public GitHubLoginController(GitHubOauthService gitHubOauthService, LoginService loginService) {
        this.gitHubOauthService = gitHubOauthService;
        this.loginService = loginService;
    }


    @GetMapping("/github")
    public ApiResponse<GitHubUserResponse> githubLogin(@RequestParam String code, @RequestHeader("User-Platform") String platform) {
        logger.debug("web code : {} ", code);
        logger.debug("platform : {} ", platform);

        JwtAuthenticationInfo jwtAuth = gitHubOauthService.login(code, UserPlatform.create(platform));
        GitHubUserResponse gitHubUserResponse = loginService.signIn(jwtAuth);
        return ApiResponse.ok(gitHubUserResponse);
    }
}
