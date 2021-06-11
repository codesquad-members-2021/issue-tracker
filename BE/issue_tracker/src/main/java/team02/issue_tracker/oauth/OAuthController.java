package team02.issue_tracker.oauth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.dto.ApiResult;
import team02.issue_tracker.oauth.dto.AuthJwt;

@Slf4j
@RequestMapping("/api")
@RestController
public class OAuthController {

    private final OAuthService oauthService;

    public OAuthController(OAuthService oauthService) {
        this.oauthService = oauthService;
    }

    @GetMapping("/login/github/web")
    public ApiResult<AuthJwt> issueJwtForWeb(@RequestParam("code") String code) {
        return ApiResult.success(oauthService.issueJwtForWeb(code));
    }

    @GetMapping("/login/github/ios")
    public ApiResult<AuthJwt> issueJwtForIos(@RequestParam("code") String code) {
        return ApiResult.success(oauthService.issueJwtForIos(code));
    }
}
