package team02.issue_tracker.oauth.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.dto.ApiResult;
import team02.issue_tracker.oauth.service.OAuthService;
import team02.issue_tracker.oauth.annotation.LoginRequired;
import team02.issue_tracker.oauth.annotation.UserId;
import team02.issue_tracker.oauth.dto.JwtResponse;

@Slf4j
@RequestMapping("/api")
@RestController
public class OAuthController {

    private final OAuthService oauthService;

    public OAuthController(OAuthService oauthService) {
        this.oauthService = oauthService;
    }

    @GetMapping("/login/github/web")
    public ApiResult<JwtResponse> issueJwtForWeb(@RequestParam("code") String code) {
        return ApiResult.success(oauthService.issueJwtForWeb(code));
    }

    @GetMapping("/login/github/ios")
    public ApiResult<JwtResponse> issueJwtForIos(@RequestParam("code") String code) {
        return ApiResult.success(oauthService.issueJwtForIos(code));
    }

    // jwt interceptor 테스트 목적 (임시)
    @LoginRequired
    @GetMapping("/jwt")
    public String jwtChecking(@UserId Long userId) {
        log.info("user id from jwt : {}", userId);
        return userId.toString();
    }
}
