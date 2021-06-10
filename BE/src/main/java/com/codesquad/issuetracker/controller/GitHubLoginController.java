package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.ApiResponse;
import com.codesquad.issuetracker.service.GitHubLoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/login")
public class GitHubLoginController {

    private Logger logger = LoggerFactory.getLogger(LoginController.class);

    private final String GITHUB_URL = "https://github.com/login/oauth/authorize";
    private final String CLIENT_ID = "7bd8b036c3471804563e";

    private final GitHubLoginService loginService;

    public GitHubLoginController(GitHubLoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping
    public String login() {
        return "redirect:" + GITHUB_URL + "?client_id=" + CLIENT_ID;
    }

    @GetMapping("/github")
    public ApiResponse githubLogin(@RequestParam String code) {
        logger.debug("code : {} ", code);

        loginService.githubLogin(code);
        return ApiResponse.ok("GitHub Login with code " + code);
    }

}
