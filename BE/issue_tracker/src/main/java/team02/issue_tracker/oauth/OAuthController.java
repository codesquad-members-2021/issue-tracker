package team02.issue_tracker.oauth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.oauth.dto.GithubAccessTokenResponseDto;
import team02.issue_tracker.oauth.dto.GithubUserProfile;

@Slf4j
@RequestMapping("/api/oauth")
@RestController
public class OAuthController {

    private final OAuthService oauthService;

    public OAuthController(OAuthService oauthService) {
        this.oauthService = oauthService;
    }

    @GetMapping("/github/callback")
    public String githubCallBack(@RequestParam("code") String code) {
        log.info("code : {}", code);
        GithubUserProfile githubUserProfile = oauthService.githubUserProfileFrom(code);
        return githubUserProfile.toString();
    }
}
