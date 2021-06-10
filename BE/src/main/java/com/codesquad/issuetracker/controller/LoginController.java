package com.codesquad.issuetracker.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login")
public class LoginController {

    private final String GITHUB_URL = "https://github.com/login/oauth/authorize";
    private final String CLIENT_ID = "7bd8b036c3471804563e";

    @GetMapping
    public String login() {
        return "redirect:" + GITHUB_URL + "?client_id=" + CLIENT_ID;
    }

}
