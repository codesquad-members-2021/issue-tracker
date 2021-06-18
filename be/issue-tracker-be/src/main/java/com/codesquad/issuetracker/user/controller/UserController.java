package com.codesquad.issuetracker.user.controller;

import com.codesquad.issuetracker.user.dto.UserResponses;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/users")
    public UserResponses readAll() {
        return UserDummyData.usersResponse();
    }
}
