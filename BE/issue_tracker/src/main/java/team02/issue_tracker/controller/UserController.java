package team02.issue_tracker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.dto.ApiResult;
import team02.issue_tracker.dto.UserInfoResponse;
import team02.issue_tracker.exception.UserNotFoundException;
import team02.issue_tracker.oauth.annotation.LoginRequired;
import team02.issue_tracker.oauth.annotation.UserId;
import team02.issue_tracker.repository.UserRepository;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @LoginRequired
    @GetMapping
    public ApiResult<UserInfoResponse> showUserInfo(@UserId Long id) {
        User user = userRepository.findById(id).orElseThrow(UserNotFoundException::new);
        return ApiResult.success(new UserInfoResponse(user));
    }
}
