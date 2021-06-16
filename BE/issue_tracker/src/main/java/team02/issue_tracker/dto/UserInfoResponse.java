package team02.issue_tracker.dto;

import lombok.Getter;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.SocialLogin;


@Getter
public class UserInfoResponse {

    private Long id;
    private SocialLogin oauthResource;
    private String email;
    private String profileImage;
    private String username;

    public UserInfoResponse(User user) {
        this.id = user.getId();
        this.oauthResource = user.getOauthResource();
        this.email = user.getEmail();
        this.profileImage = user.getProfileImage();
        this.username = user.getUsername();
    }
}

