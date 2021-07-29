package com.codesquad.issuetracker.auth.controller;

import com.codesquad.issuetracker.auth.UserPlatform;
import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.auth.response.GitHubUserResponse;
import com.codesquad.issuetracker.auth.service.GitHubLoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class GitHubLoginController {

    private Logger logger = LoggerFactory.getLogger(GitHubLoginController.class);

    private final GitHubLoginService loginService;

    public GitHubLoginController(GitHubLoginService loginService) {
        this.loginService = loginService;
    }


    @GetMapping("/github")
    public ApiResponse<GitHubUserResponse> githubLogin(@RequestParam String code, @RequestHeader("User-Platform") String platform) {
        logger.debug("web code : {} ", code);
        logger.debug("platform : {} ", platform);

        GitHubUserResponse response = loginService.login(code, UserPlatform.create(platform));
        return ApiResponse.ok(response);
    }
}
