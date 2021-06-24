package team02.issue_tracker.oauth.dto.kakao;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.ToString;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.SocialLogin;
import team02.issue_tracker.oauth.dto.SocialProfile;

@ToString
@Getter
public class KakaoUserProfile implements SocialProfile {

    private Properties properties;

    @JsonProperty(value = "kakao_account")
    private KakaoAccount kakaoAccount;

    @ToString
    @Getter
    public class Properties {
        private String nickname;

        @JsonProperty(value = "thumbnail_image")
        private String thumbnailImage;
    }

    @ToString
    @Getter
    public class KakaoAccount {
        private String email;
    }

    @Override
    public User becomeUser() {
        return User.builder()
                .oauthResource(SocialLogin.KAKAO)
                .username(this.properties.nickname)
                .email(this.kakaoAccount.email)
                .profileImage(this.properties.thumbnailImage)
                .build();
    }
}
