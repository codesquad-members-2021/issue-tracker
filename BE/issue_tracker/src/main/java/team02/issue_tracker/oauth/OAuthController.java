package team02.issue_tracker.oauth;

import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.AuthJwt;
import team02.issue_tracker.oauth.dto.GithubUserProfile;
import team02.issue_tracker.service.UserService;

@Slf4j
@RequestMapping("/api/oauth")
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

    @GetMapping("/github/callback")
    public String githubCallBack(@RequestParam("code") String code) {
        log.info("code : {}", code);
        GithubUserProfile githubUserProfile = oauthService.githubUserProfileFrom(code);
        User user = userService.enroll(githubUserProfile.becomeUser());

        AuthJwt authJwt = jwtUtils.getJwt(user);
        log.info("auth jwt : {}", authJwt.getJwt());
        DecodedJWT decodedJWT = jwtUtils.decode(authJwt.getJwt());
        String result = jwtUtils.decodeJwt(decodedJWT);
        log.info("info from jwt token : {}", result);


        return githubUserProfile.toString();
    }
}
