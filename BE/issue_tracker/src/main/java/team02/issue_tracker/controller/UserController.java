package team02.issue_tracker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.dto.ApiResult;
import team02.issue_tracker.dto.UserInfoResponse;
import team02.issue_tracker.oauth.annotation.LoginRequired;
import team02.issue_tracker.oauth.annotation.UserId;
import team02.issue_tracker.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @LoginRequired
    @GetMapping
    public ApiResult<UserInfoResponse> showUserInfo(@UserId Long id) {
        User user = userService.findOne(id);
        return ApiResult.success(new UserInfoResponse(user));
    }
}
