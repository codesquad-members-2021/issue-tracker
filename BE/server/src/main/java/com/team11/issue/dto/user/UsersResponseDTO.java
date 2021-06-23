package com.team11.issue.dto.user;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
@Builder
@Getter
public class UsersResponseDTO {

    private final List<UserResponseDTO> users;

    public static UsersResponseDTO from(List<UserResponseDTO> userResponseDTOS) {
        return UsersResponseDTO.builder()
                .users(userResponseDTOS)
                .build();
    }
}
