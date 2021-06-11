package com.codesquad.issuetracker.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/users")
    public UserResponses readAll() {
        return UserDummyData.usersResponse();
    }
}
