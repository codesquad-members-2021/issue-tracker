package com.issuetracker.web;

import com.issuetracker.auth.annotation.LoginRequired;
import com.issuetracker.auth.annotation.UserId;
import com.issuetracker.service.UserService;
import com.issuetracker.web.dto.response.UserResponseDTO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserService userService;
    private final Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("/login")
    public UserResponseDTO login(@RequestHeader("User-Agent") String userAgent, @RequestParam String code) {
        logger.debug("로그인 요청");
        logger.debug("헤더 확인: {}", userAgent);
        return userService.login(code, userAgent);
    }

    @GetMapping("/logout")
    @LoginRequired
    public void logout(@UserId Long userId) {
        logger.debug("로그아웃 요청");
        userService.logout(userId);
    }
}
