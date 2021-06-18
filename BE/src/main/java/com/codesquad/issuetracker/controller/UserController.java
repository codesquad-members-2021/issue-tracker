package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/author/open")
    public ApiResponse getAllOpenIssueAuthor() {
        return ApiResponse.ok(userService.getAllOpenIssueAuthor());
    }

    @GetMapping("/author/close")
    public ApiResponse getAllCloseIssueAuthor() {
        return ApiResponse.ok(userService.getAllCloseIssueAuthor());
    }
}
