package com.codesquad.issuetracker.user.dto;

import com.codesquad.issuetracker.user.domain.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class UserDto {

    private final UUID id;
    private final String nickName;
    private final String imageUrl;

    public static UserDto fromEntity (User user) {
        return new UserDto(user.getId(), user.getNickName(), user.getImageUrl());
    }
}
