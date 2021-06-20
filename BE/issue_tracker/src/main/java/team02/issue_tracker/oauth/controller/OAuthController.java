package team02.issue_tracker.oauth.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.dto.ApiResult;
import team02.issue_tracker.oauth.dto.SocialProfile;
import team02.issue_tracker.oauth.dto.github.GithubUserProfile;
import team02.issue_tracker.oauth.service.GithubLoginService;
import team02.issue_tracker.oauth.service.GoogleLoginService;
import team02.issue_tracker.oauth.annotation.LoginRequired;
import team02.issue_tracker.oauth.annotation.UserId;
import team02.issue_tracker.oauth.dto.JwtResponse;
import team02.issue_tracker.oauth.service.LoginService;

@Slf4j
@RequestMapping("/api")
@RestController
public class OAuthController {

    private final LoginService loginService;
    private final GithubLoginService githubLoginService;

    public OAuthController(LoginService loginService, GithubLoginService githubLoginService) {
        this.loginService = loginService;
        this.githubLoginService = githubLoginService;
    }

    @GetMapping("/login/github/web")
    public ApiResult<JwtResponse> loginGithubWeb(@RequestParam("code") String code) {
        return ApiResult.success(loginService.loginGithubWeb(code));
    }

    @GetMapping("/login/github/ios")
    public ApiResult<JwtResponse> loginGithubWebIos(@RequestParam("code") String code) {
        return ApiResult.success(loginService.loginGithubIos(code));
    }

    @GetMapping("/login/google")
    public ApiResult<JwtResponse> loginGoogle(@RequestParam("code") String code) {
        return ApiResult.success(loginService.loginGoogle(code));
    }

    // jwt interceptor 테스트 목적 (임시)
    @LoginRequired
    @GetMapping("/jwt")
    public String jwtChecking(@UserId Long userId) {
        log.info("user id from jwt : {}", userId);
        return userId.toString();
    }
}
