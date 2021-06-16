package com.team11.issue.dto.user;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.team11.issue.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@JsonPropertyOrder({"userId", "userName", "profileImage"})
@RequiredArgsConstructor
@Builder
@Getter
public class UserResponseDTO {

    private final Long userId;
    private final String userName;
    private final String profileImage;

    public static UserResponseDTO from(User user) {
        return UserResponseDTO.builder()
                .userId(user.getId())
                .userName(user.getName())
                .profileImage(user.getProfileImage())
                .build();
    }
}
