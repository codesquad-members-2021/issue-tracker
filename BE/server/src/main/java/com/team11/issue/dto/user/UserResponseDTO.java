package com.team11.issue.dto.user;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.team11.issue.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@JsonPropertyOrder({"id", "name", "profileImage"})
@RequiredArgsConstructor
@Builder
@Getter
public class UserResponseDTO {

    private final Long id;
    private final String name;
    private final String profileImage;

    public static UserResponseDTO from(User user) {
        return UserResponseDTO.builder()
                .id(user.getId())
                .name(user.getName())
                .profileImage(user.getProfileImage())
                .build();
    }
}
