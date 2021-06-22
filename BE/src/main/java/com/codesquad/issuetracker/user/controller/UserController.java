package com.codesquad.issuetracker.user.controller;

import com.codesquad.issuetracker.user.dto.UsersWrapper;
import com.codesquad.issuetracker.user.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public UsersWrapper readAllUsers() {
        return userService.readAllUsers();
    }
}
