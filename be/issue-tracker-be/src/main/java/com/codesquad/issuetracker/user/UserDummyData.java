package com.codesquad.issuetracker.user;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class UserDummyData {
    private UserDummyData() {
    }

    public static Set<UserResponse> usersResponse() {
        return new HashSet<>(Arrays.asList(
                userFreddie(),
                userHiro()
        ));
    }

    public static UserResponse userFreddie() {
        return UserResponse.builder()
                .id(1L)
                .email("freddie@freddie.com")
                .name("freddie")
                .build();
    }

    public static UserResponse userHiro() {
        return UserResponse.builder()
                .id(2L)
                .email("hiro@hiro.com")
                .name("hiro")
                .build();
    }
}
