package com.issuetracker.web.dto.response;

import com.issuetracker.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class UserResponseDTO {

    private final String name;
    private final String email;
    private final String userName;
    private final String avatarUrl;
    private final String token;

    public static UserResponseDTO of(User user, String token) {
        return UserResponseDTO.builder()
                .name(user.getName())
                .email(user.getEmail())
                .userName(user.getUserName())
                .avatarUrl(user.getAvatarUrl())
                .token(token)
                .build();
    }

    public static UserResponseDTO of(User user) {
        return UserResponseDTO.builder()
                .name(user.getName())
                .email(user.getEmail())
                .userName(user.getUserName())
                .avatarUrl(user.getAvatarUrl())
                .build();
    }
}
