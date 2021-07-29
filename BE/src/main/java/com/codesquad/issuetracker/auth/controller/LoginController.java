package com.codesquad.issuetracker.auth.controller;

import com.codesquad.issuetracker.auth.UserPlatform;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login")
public class LoginController {

    private final String GITHUB_URL = "https://github.com/login/oauth/authorize";
    private final String CLIENT_ID_WEB;
    private final String CLIENT_ID_IOS;

    public LoginController(@Value("github.client.id.web") String webClientId,
                           @Value("github.client.id.ios") String iOSClientId) {
        CLIENT_ID_WEB = webClientId;
        CLIENT_ID_IOS = iOSClientId;
    }

    @GetMapping
    public String login(@RequestHeader("User-Platform") String platform) {
        UserPlatform userPlatform = UserPlatform.create(platform);
        if (userPlatform == UserPlatform.WEB) {
            return "redirect:" + GITHUB_URL + "?client_id=" + CLIENT_ID_WEB;
        }
        return "redirect:" + GITHUB_URL + "?client_id=" + CLIENT_ID_IOS;
    }
}
