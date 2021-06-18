package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.domain.User;
import com.codesquad.issuetracker.dto.ApiResult;
import com.codesquad.issuetracker.dto.GithubUserInfoDTO;
import com.codesquad.issuetracker.dto.GoogleUserInfoDTO;
import com.codesquad.issuetracker.service.GithubOauthService;
import com.codesquad.issuetracker.service.GoogleOauthService;
import com.codesquad.issuetracker.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    private final GithubOauthService githubOauthService;
    private final GoogleOauthService googleOauthService;
    private final UserService userService;

    public UserController(GithubOauthService githubOauthService, GoogleOauthService googleOauthService, UserService userService) {
        this.githubOauthService = githubOauthService;
        this.googleOauthService = googleOauthService;
        this.userService = userService;
    }

    @GetMapping("/login/oauth/github")
    public ApiResult<String> loginWithGithub(@RequestParam("code") String code) {
        String accessToken = githubOauthService.getAccessToken(code);
        GithubUserInfoDTO userInfo = githubOauthService.getUserInfo(accessToken);

        User user = userService.getUserFromUserInfo(userInfo, "github");

        return ApiResult.ok(userService.getJsonWebToken(user));
    }

    @GetMapping("/login/oauth/google")
    public ApiResult<String> loginWithGoogle(@RequestParam("code") String code) {
        String accessToken = googleOauthService.getAccessToken(code);
        GoogleUserInfoDTO userInfo = googleOauthService.getUserInfo(accessToken);

        User user = userService.getUserFromUserInfo(userInfo, "google");

        return ApiResult.ok(userService.getJsonWebToken(user));
    }
}
