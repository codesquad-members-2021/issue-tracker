package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.ApiResponse;
import com.codesquad.issuetracker.service.LoginService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/github")
    public ApiResponse githubLogin(@RequestParam String code) {
        loginService.githubLogin(code);
        return ApiResponse.ok("GitHub Login with code " + code);
    }

}
