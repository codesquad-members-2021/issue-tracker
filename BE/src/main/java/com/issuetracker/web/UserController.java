package com.issuetracker.web;

import com.issuetracker.auth.annotation.LoginRequired;
import com.issuetracker.auth.annotation.UserId;
import com.issuetracker.auth.dto.UserAgentDTO;
import com.issuetracker.service.UserService;
import com.issuetracker.web.dto.response.AssigneesResponseDTO;
import com.issuetracker.web.dto.response.AuthorsResponseDTO;
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
    public UserResponseDTO login(@RequestHeader(name = "User-Agent") UserAgentDTO userAgentDTO, @RequestParam String code) {
        logger.debug("로그인 요청");
        return userService.login(code, userAgentDTO);
    }

    @LoginRequired
    @GetMapping("/logout")
    public void logout(@UserId Long userId) {
        logger.debug("로그아웃 요청");
        userService.logout(userId);
    }

    @GetMapping("/assignees")
    public AssigneesResponseDTO getAssignees() {
        logger.debug("모든 담당자 조회");
        return userService.getAssignees();
    }

    @GetMapping("/authors")
    public AuthorsResponseDTO getAuthors() {
        logger.debug("모든 작성자 조회");
        return userService.getAuthors();
    }

    @LoginRequired
    @GetMapping("/userInfo")
    public UserResponseDTO getUserInfo(@UserId Long userId) {
        logger.debug("유저 정보 요청");
        return userService.getUserInfo(userId);
    }
}
