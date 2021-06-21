package com.codesqaude.cocomarco.domain.user.dto;

import com.codesqaude.cocomarco.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserResponse {

    private String id;
    private String name;
    private String avatarImage;

    public static UserResponse of(User user) {
        return new UserResponse(user.getId().toString(), user.getName(), user.getAvatarImage());
    }
}
