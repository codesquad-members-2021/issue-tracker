package com.codesquad.issuetracker.user.controller;

import com.codesquad.issuetracker.user.dto.UserResponse;
import com.codesquad.issuetracker.user.dto.UserResponses;

import java.util.Arrays;

public class UserDummyData {
    private UserDummyData() {
    }

    public static UserResponses usersResponse() {
        return UserResponses.from(Arrays.asList(
                userFreddie(),
                userHiro()
        ));
    }

    public static UserResponse userFreddie() {
        return UserResponse.builder()
                       .id(1L)
                       .email("freddie@freddie.com")
                       .name("freddie")
                       .profileImage("/images/소라게.jpg")
                       .build();
    }

    public static UserResponse userHiro() {
        return UserResponse.builder()
                       .id(2L)
                       .email("hiro@hiro.com")
                       .name("hiro")
                       .profileImage("/images/소라게.jpg")
                       .build();
    }
}
