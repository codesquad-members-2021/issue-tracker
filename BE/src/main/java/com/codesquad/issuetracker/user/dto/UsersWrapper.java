package com.codesquad.issuetracker.user.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class UsersWrapper {

    private final List<UserDto> users;

    public static UsersWrapper wrap(List<UserDto> users) {
        return new UsersWrapper(users);
    }
}
