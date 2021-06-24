package team02.issue_tracker.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.dto.ApiResult;
import team02.issue_tracker.dto.UserInfoResponse;
import team02.issue_tracker.oauth.annotation.LoginRequired;
import team02.issue_tracker.oauth.annotation.UserId;
import team02.issue_tracker.service.UserService;

@Api(tags = {"유저 관련 API"}, description = "로그인된 유저의 정보 조회 가능합니다.")
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @ApiOperation(value = "유저 정보 조회", notes = "로그인된 유저의 정보를 조회합니다. (로그인 필수)")
    @LoginRequired
    @GetMapping
    public ApiResult<UserInfoResponse> showUserInfo(@UserId Long id) {
        User user = userService.findOne(id);
        return ApiResult.success(new UserInfoResponse(user));
    }
}
