package team02.issue_tracker.oauth.dto.kakao;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.SocialLogin;
import team02.issue_tracker.oauth.dto.SocialProfile;

@ToString
@Getter
public class KakaoUserProfile implements SocialProfile {

    private Integer id;

    @JsonProperty(value = "connected_at")
    private String connectedAt;

    private Properties properties;

    @JsonProperty(value = "kakao_account")
    private KakaoAccount kakaoAccount;

    @ToString
    @Getter
    public class Properties {
        private String nickname;

        @JsonProperty(value = "thumbnail_image")
        private String thumbnailImage;

        @JsonProperty(value = "profile_image")
        private String profileImage;
    }

    @ToString
    @Getter
    public class KakaoAccount {
        @JsonProperty(value = "profile_needs_agreement")
        private Boolean profileNeedsAgreement;

        private Profile profile;

        @JsonProperty(value = "has_email")
        private Boolean hasEmail;

        @JsonProperty(value = "email_needs_agreement")
        private Boolean emailNeedsAgreement;

        @JsonProperty(value = "is_email_valid")
        private Boolean isEmailValid;

        @JsonProperty(value = "is_email_verified")
        private Boolean isEmailVerified;

        private String email;

        @ToString
        @Getter
        public class Profile {
            private String nickname;

            @JsonProperty(value = "thumbnail_image_url")
            private String thumbnailImageUrl;

            @JsonProperty(value = "profile_image_url")
            private String profileImageUrl;

            @JsonProperty(value = "is_default_image")
            private Boolean isDefaultImage;
        }
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
