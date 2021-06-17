package com.codesquad.issuetracker.controller;

import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login")
public class LoginController {

    private final String GITHUB_URL = "https://github.com/login/oauth/authorize";
    private final String CLIENT_ID;

    public LoginController(Environment environment) {
        this.CLIENT_ID = environment.getProperty("github.client.id");
    }

    @GetMapping
    public String login() {
        return "redirect:" + GITHUB_URL + "?client_id=" + CLIENT_ID;
    }

}
