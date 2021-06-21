package team02.issue_tracker.oauth.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.AccessToken;
import team02.issue_tracker.oauth.dto.JwtResponse;
import team02.issue_tracker.oauth.dto.SocialLogin;
import team02.issue_tracker.oauth.dto.SocialProfile;
import team02.issue_tracker.oauth.jwt.JwtFactory;
import team02.issue_tracker.service.UserService;

@Service
public class LoginService {

    private final OAuthService githubLoginService;
    private final OAuthService googleLoginService;

    private final UserService userService;
    private final JwtFactory jwtFactory;

    public LoginService(GithubLoginService githubLoginService, GoogleLoginService googleLoginService
            , UserService userService, JwtFactory jwtFactory) {
        this.githubLoginService = githubLoginService;
        this.googleLoginService = googleLoginService;
        this.userService = userService;
        this.jwtFactory = jwtFactory;
    }

    public JwtResponse loginGithubWeb(final String code) {
        AccessToken accessToken = githubLoginService.accessToken(code, SocialLogin.GITHUB_WEB);
        SocialProfile githubUserProfile = githubLoginService.userProfile(accessToken);
        User user = userFrom(githubUserProfile);
        return jwtFactory.codeUserToJwt(user);
    }

    public JwtResponse loginGithubIos(final String code) {
        AccessToken accessToken = githubLoginService.accessToken(code, SocialLogin.GITHUB_IOS);
        SocialProfile githubUserProfile = githubLoginService.userProfile(accessToken);
        User user = userFrom(githubUserProfile);
        return jwtFactory.codeUserToJwt(user);
    }

    public JwtResponse loginGoogle(final String code) {
        AccessToken accessToken = googleLoginService.accessToken(code, SocialLogin.GOOGLE);
        SocialProfile googleUserProfile = googleLoginService.userProfile(accessToken);
        User user = userFrom(googleUserProfile);
        return jwtFactory.codeUserToJwt(user);
    }

    private User userFrom(final SocialProfile socialProfile) {
        User socialProfileUser = socialProfile.becomeUser();
        User user = userService.findByUser(socialProfileUser);
        if (user == null) {
            user = userService.enroll(socialProfileUser);
        }
        return user;
    }
}
