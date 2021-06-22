package team02.issue_tracker.oauth.dto.naver;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.ToString;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.SocialLogin;
import team02.issue_tracker.oauth.dto.SocialProfile;

@ToString
@Getter
public class NaverUserProfile implements SocialProfile {

    private Response response;

    @ToString
    @Getter
    public class Response {
        @JsonProperty("nickname")
        private String nickname;

        @JsonProperty("profile_image")
        private String profileImage;

        @JsonProperty("email")
        private String email;
    }

    @Override
    public User becomeUser() {
        return User.builder()
                .oauthResource(SocialLogin.NAVER)
                .username(this.response.nickname)
                .profileImage(this.response.profileImage)
                .email(this.response.email)
                .build();
    }
}
