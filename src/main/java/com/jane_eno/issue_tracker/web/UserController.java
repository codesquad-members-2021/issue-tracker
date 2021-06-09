package com.jane_eno.issue_tracker.web;

import com.jane_eno.issue_tracker.service.UserService;
import com.jane_eno.issue_tracker.web.dto.response.UserResponseDTO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("/login")
    public UserResponseDTO login(@RequestHeader("host") String host, @RequestParam String code) {
        logger.debug("로그인 요청");
        logger.debug("헤더 확인: {}", host);
        return userService.login(code, host);
    }

    @GetMapping("/logout")
    public void logout(@RequestHeader String authorization) {
        logger.debug("로그아웃 요청");
        userService.logout(authorization);
    }
}
