package com.team11.issue.controller;

import com.team11.issue.dto.ResponseDTO;
import com.team11.issue.dto.user.LoginRequestDTO;
import com.team11.issue.dto.user.LoginResponseDTO;
import com.team11.issue.dto.user.UsersResponseDTO;
import com.team11.issue.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(tags = {"USER 관련 API"}, description = "로그인, 로그아웃, 전체 사용자 조회와 관련된 API")
@RestController
@RequestMapping("api")
public class UserController {

    private final Logger logger = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/user/login")
    @ApiOperation(value = "로그인", notes = "code를 가지고 로그인을 합니다.")
    public ResponseEntity<LoginResponseDTO> login(@ApiParam("IssueTrackerFE || IssueTrackerIOS") @RequestHeader("User-Agent") String userAgent,
                                                  @ApiParam("github code") @RequestBody LoginRequestDTO loginRequestDTO) {
        logger.info("로그인 요청: " + userAgent);
        return ResponseEntity.ok().body(userService.login(userAgent, loginRequestDTO));
    }

    @PutMapping("/user/logout")
    @ApiOperation(value = "로그아웃", notes = "jwt token을 가지고 로그아웃을 합니다.")
    public ResponseEntity<ResponseDTO> logout(@ApiParam(hidden = true) @RequestAttribute String userName) {
        logger.info("로그아웃 요청");
        userService.logout(userName);
        return ResponseEntity.ok().body(new ResponseDTO("logout"));
    }

    @GetMapping("/users")
    @ApiOperation(value = "User 전체 목록 조회", notes = "유저 전체 목록을 조회합니다.")
    public ResponseEntity<UsersResponseDTO> userList() {
        logger.info("User 전체 목록 조회 요청");
        return ResponseEntity.ok().body(userService.userList());
    }

}
