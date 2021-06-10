package team02.issue_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team02.issue_tracker.domain.User;

@AllArgsConstructor
@Getter
public class UserResponse {

    private Long id;
    private String username;
    private String profileImage;

    public static UserResponse toUserResponse(User user) {
        return new UserResponse(user.getId(), user.getUsername(), user.getProfileImage());
    }
}
