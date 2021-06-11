package com.team11.issue.controller;

import com.team11.issue.dto.ResponseDTO;
import com.team11.issue.dto.user.LoginRequestDTO;
import com.team11.issue.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")
public class UserController {

    private final Logger logger = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO loginRequestDTO) {
        logger.info("로그인 요청");
        return ResponseEntity.ok().body(userService.login(loginRequestDTO));
    }

    @PutMapping("/logout")
    public ResponseEntity logout(@RequestHeader String authorization) {
        logger.info("로그아웃 요청");
        userService.logout(authorization);
        return ResponseEntity.ok().body(new ResponseDTO("logout"));
    }


}
