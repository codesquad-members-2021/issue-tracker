package com.jane_eno.issue_tracker.service;

import com.jane_eno.issue_tracker.auth.OAuth;
import com.jane_eno.issue_tracker.auth.dto.AccessTokenResponseDTO;
import com.jane_eno.issue_tracker.auth.dto.GitHubUserResponseDTO;
import com.jane_eno.issue_tracker.auth.util.JwtUtil;
import com.jane_eno.issue_tracker.domain.user.User;
import com.jane_eno.issue_tracker.domain.user.UserRepository;
import com.jane_eno.issue_tracker.exception.ElementNotFoundException;
import com.jane_eno.issue_tracker.web.dto.response.UserResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final OAuth oauth;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public UserResponseDTO login(String code, String userAgent) {
        AccessTokenResponseDTO token = oauth.getToken(code, userAgent);
        GitHubUserResponseDTO userInfo = oauth.getUserInfo(token.getAccessToken());
        if (verifyUser(userInfo.getLogin())) {
            User user = findByUserName(userInfo.getLogin());
            user.update(userInfo, token.getAccessToken());
            return UserResponseDTO.createUserResponseDTO(user, jwtUtil.createToken(userRepository.save(user)));
        }
        User user = User.createUser(userInfo, token);
        return UserResponseDTO.createUserResponseDTO(user, jwtUtil.createToken(userRepository.save(user)));
    }

    public void logout(Long userId) {
        User user = findByUserId(userId);
        user.removeToken();
        userRepository.save(user);
    }

    private boolean verifyUser(String userName) {
        return userRepository.findByUserName(userName).isPresent();
    }

    private User findByUserName(String userName) {
        return userRepository.findByUserName(userName).orElseThrow(
                () -> new ElementNotFoundException("Cannot find user by given user name.")
        );
    }

    private User findByUserId(Long userId) {
        return userRepository.findById(userId).orElseThrow(
                () -> new ElementNotFoundException("Cannot find user by given user id.")
        );
    }
}
