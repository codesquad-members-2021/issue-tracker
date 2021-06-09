package com.codesquad.issuetracker.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
public class UserController {

    @GetMapping("/users")
    public Set<UserResponse> userResponses() {
        return UserDummyData.userResponse();
    }
}
