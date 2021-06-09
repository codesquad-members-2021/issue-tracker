package com.jane_eno.issue_tracker.service;

import com.jane_eno.issue_tracker.auth.OAuth;
import com.jane_eno.issue_tracker.auth.dto.AccessTokenResponseDTO;
import com.jane_eno.issue_tracker.auth.dto.GitHubUserResponseDTO;
import com.jane_eno.issue_tracker.auth.util.JwtUtil;
import com.jane_eno.issue_tracker.domain.user.User;
import com.jane_eno.issue_tracker.domain.user.UserRepository;
import com.jane_eno.issue_tracker.exception.EntityNotFoundException;
import com.jane_eno.issue_tracker.web.dto.response.UserResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final OAuth oauth;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public UserResponseDTO login(String code, String host) {
        AccessTokenResponseDTO token = oauth.getToken(code, host);
        GitHubUserResponseDTO userInfo = oauth.getUserInfo(token.getAccessToken());
        if (verifyUser(userInfo.getLogin())) {
            User user = findByUserName(userInfo.getLogin());
            user.update(userInfo, token.getAccessToken());
            userRepository.save(user);
            return UserResponseDTO.createUserResponseDTO(user, jwtUtil.createToken(user));
        }
        User user = User.createUser(userInfo, token);
        userRepository.save(user);
        return UserResponseDTO.createUserResponseDTO(user, jwtUtil.createToken(user));
    }

    public void logout(String userName) {
        User user = findByUserName(userName);
        user.removeToken();
        userRepository.save(user);
    }

    private boolean verifyUser(String userName) {
        return userRepository.findByUserName(userName).isPresent();
    }

    private User findByUserName(String userName) {
        return userRepository.findByUserName(userName).orElseThrow(EntityNotFoundException::new);
    }
}
