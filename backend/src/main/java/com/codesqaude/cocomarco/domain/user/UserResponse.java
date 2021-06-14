package com.codesqaude.cocomarco.domain.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private String id;
    private String name;
    private String avatarImage;

    public static UserResponse of(User user) {
        return new UserResponse(user.getId().toString(), user.getName(), user.getAvatarImage());
    }
}
