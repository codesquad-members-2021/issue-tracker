package team02.issue_tracker.oauth.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.GoogleAccessTokenResponseDto;
import team02.issue_tracker.oauth.dto.GoogleUserProfile;
import team02.issue_tracker.oauth.dto.JwtResponse;
import team02.issue_tracker.oauth.dto.SocialProfile;
import team02.issue_tracker.oauth.utils.JwtUtils;
import team02.issue_tracker.service.UserService;

@Service
public class GoogleLoginService {

    @Value("${oauth.google.web.client_id}")
    private String clientId;

    @Value("${oauth.google.web.client_secret}")
    private String clientSecret;

    private String authorize_uri = "https://accounts.google.com/o/oauth2/v2/auth";

    private UserService userService;
    private WebClient webClient;
    private JwtUtils jwtUtils;

    public GoogleLoginService(UserService userService, WebClient webClient, JwtUtils jwtUtils) {
        this.userService = userService;
        this.webClient = webClient;
        this.jwtUtils = jwtUtils;
    }

    public JwtResponse issueJwtGoogle(final String code) {
        String request = String.format("code=%s&" +
                        "client_id=%s&" +
                        "client_secret=%s&" +
                        "redirect_uri=%s&" +
                        "grant_type=%s"
                , code, clientId, clientSecret, "http://localhost:8080/api/login/google", "authorization_code");

        GoogleAccessTokenResponseDto response = webClient.post()
                .uri("https://oauth2.googleapis.com/token")
                .header("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE)
                .bodyValue(request)
                .retrieve()
                .bodyToMono(GoogleAccessTokenResponseDto.class)
                .blockOptional()
                .orElseThrow(IllegalStateException::new);

        System.out.println(response.toString());

        String accessToken = response.accessToken();

        return jwtUtils.codeUserToJwt(userFrom(googleUserProfile(accessToken)));
    }

    public GoogleUserProfile googleUserProfile(final String accessToken) {
        GoogleUserProfile googleUserProfile = webClient.get()
                .uri("https://www.googleapis.com/oauth2/v1/userinfo")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .retrieve()
                .bodyToMono(GoogleUserProfile.class)
                .blockOptional()
                .orElseThrow(IllegalStateException::new);

        System.out.println("google user : " + googleUserProfile);

        return googleUserProfile;
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
