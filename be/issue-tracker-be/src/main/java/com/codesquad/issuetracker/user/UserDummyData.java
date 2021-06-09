package com.codesquad.issuetracker.user;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class UserDummyData {
    private UserDummyData() {

    }

    public static Set<UserResponse> userResponse() {
        return new HashSet<>(Arrays.asList(
                UserResponse.builder()
                    .id(1L)
                    .name("hiro")
                    .email("hiro@naver.com")
                    .build()
        ));
    }
}
