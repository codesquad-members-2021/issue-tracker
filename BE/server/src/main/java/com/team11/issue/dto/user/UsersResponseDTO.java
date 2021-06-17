package com.team11.issue.dto.user;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor(staticName = "of")
@Builder
@Getter
public class UsersResponseDTO {

    private final List<UserResponseDTO> users = new ArrayList<>();
}
