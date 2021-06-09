package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @GetMapping("/github")
    public ApiResponse githubLogin(@RequestParam String code) {
        return ApiResponse.ok("GitHub Login with code " + code);
    }

}
