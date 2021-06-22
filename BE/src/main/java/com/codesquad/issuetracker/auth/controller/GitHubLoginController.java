package com.codesquad.issuetracker.auth.controller;

import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.auth.response.GitHubUserResponse;
import com.codesquad.issuetracker.auth.service.GitHubLoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class GitHubLoginController {

    private Logger logger = LoggerFactory.getLogger(GitHubLoginController.class);

    private final GitHubLoginService loginService;

    public GitHubLoginController(GitHubLoginService loginService) {
        this.loginService = loginService;
    }


    @GetMapping("/github")
    public ApiResponse<GitHubUserResponse> githubLogin(@RequestParam String code) {
        logger.debug("web code : {} ", code);
        GitHubUserResponse response = loginService.login(code);
        return ApiResponse.ok(response);
    }

    @GetMapping("/github/iOS")
    public ApiResponse<GitHubUserResponse> githubIOSLogin(@RequestParam String code) {
        logger.debug("iOS code : {} ", code);
        GitHubUserResponse response = loginService.loginIOS(code);
        return ApiResponse.ok(response);
    }
}
