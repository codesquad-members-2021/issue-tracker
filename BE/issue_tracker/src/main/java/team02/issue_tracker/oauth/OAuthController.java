package team02.issue_tracker.oauth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.dto.ApiResult;
import team02.issue_tracker.oauth.dto.AuthJwt;
import team02.issue_tracker.service.UserService;

@Slf4j
@RequestMapping("/api")
@RestController
public class OAuthController {

    private final OAuthService oauthService;
    private final UserService userService;
    private final JwtUtils jwtUtils;

    public OAuthController(OAuthService oauthService
            , UserService userService, JwtUtils jwtUtils) {
        this.oauthService = oauthService;
        this.userService = userService;
        this.jwtUtils = jwtUtils;
    }

    @GetMapping("/login/github/web")
    public ApiResult<AuthJwt> issueJwtForWeb(@RequestParam("code") String code) {
        log.info("code : {}", code);
        return ApiResult.success(oauthService.issueJwtForWeb(code));
    }

    @GetMapping("/login/github/ios")
    public ApiResult<AuthJwt> issueJwtForIos(@RequestParam("code") String code) {
        log.info("code : {}", code);
        return ApiResult.success(oauthService.issueJwtForIos(code));
    }
}
