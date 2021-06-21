package team02.issue_tracker.dto;

import lombok.Getter;
import team02.issue_tracker.domain.User;

@Getter
public class UserResponse {

    private Long id;
    private String username;
    private String profileImage;

    public UserResponse(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.profileImage = user.getProfileImage();
    }
}
