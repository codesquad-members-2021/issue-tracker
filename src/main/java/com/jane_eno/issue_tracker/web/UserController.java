package com.jane_eno.issue_tracker.web;

import com.jane_eno.issue_tracker.service.UserService;
import com.jane_eno.issue_tracker.web.dto.response.UserResponseDTO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("/login")
    public UserResponseDTO login(@RequestParam String code) {
        logger.info("로그인 요청");
        return userService.login(code);
    }

    @GetMapping("/logout")
    public void logout(@RequestHeader String authorization) {
        logger.info("로그아웃 요청");
        userService.logout(authorization);
    }
}
