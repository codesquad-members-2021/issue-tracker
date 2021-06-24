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

    private final GithubLoginService githubLoginService;
    private final GoogleLoginService googleLoginService;
    private final KakaoLoginService kakaoLoginService;
    private final NaverLoginService naverLoginService;

    private final UserService userService;
    private final JwtFactory jwtFactory;

    public LoginService(GithubLoginService githubLoginService,
                        GoogleLoginService googleLoginService,
                        KakaoLoginService kakaoLoginService,
                        NaverLoginService naverLoginService,
                        UserService userService, JwtFactory jwtFactory) {
        this.githubLoginService = githubLoginService;
        this.googleLoginService = googleLoginService;
        this.kakaoLoginService = kakaoLoginService;
        this.naverLoginService = naverLoginService;
        this.userService = userService;
        this.jwtFactory = jwtFactory;
    }

    public JwtResponse login(final String code, final SocialLogin oauthResource) {
        SocialProfile socialProfile;
        switch(oauthResource) {
            case GITHUB_WEB:
                socialProfile = githubLoginService.requestUserProfileWeb(code); break;
            case GITHUB_IOS:
                socialProfile = githubLoginService.requestUserProfileIos(code); break;
            case GOOGLE:
                socialProfile = googleLoginService.requestUserProfile(code); break;
            case KAKAO:
                socialProfile = kakaoLoginService.requestUserProfile(code); break;
            case NAVER:
                socialProfile = naverLoginService.requestUserProfile(code); break;
            default:
                throw new IllegalStateException("Unexpected value: " + oauthResource);
        }
        User user = userFrom(socialProfile);
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
