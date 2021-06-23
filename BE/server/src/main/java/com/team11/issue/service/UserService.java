package com.team11.issue.service;

import com.team11.issue.domain.User;
import com.team11.issue.dto.oauth.UserInfoDTO;
import com.team11.issue.dto.user.LoginRequestDTO;
import com.team11.issue.dto.user.LoginResponseDTO;
import com.team11.issue.dto.user.UserResponseDTO;
import com.team11.issue.dto.user.UsersResponseDTO;
import com.team11.issue.exception.AccessTokenNotFoundException;
import com.team11.issue.exception.UserNotFoundException;
import com.team11.issue.oauth.GitHubOauth;
import com.team11.issue.repository.UserRepository;
import com.team11.issue.util.JwtUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final GitHubOauth gitHubOauth;
    private final UserRepository userRepository;

    public UserService(GitHubOauth gitHubOauth, UserRepository userRepository) {
        this.gitHubOauth = gitHubOauth;
        this.userRepository = userRepository;
    }

    private String getAccessToken(String userAgent, LoginRequestDTO loginRequestDTO) {
        return gitHubOauth.getAccessToken(userAgent, loginRequestDTO).orElseThrow(() -> new AccessTokenNotFoundException());
    }

    private UserInfoDTO getUserInfoFromGitHub(String accessToken) {
        return gitHubOauth.getUserInfoFromGitHub(accessToken);
    }

    private User findByName(String name) {
        return userRepository.findByName(name).orElseThrow(UserNotFoundException::new);
    }

    private String createJwtToken(String userName) {
        return JwtUtil.createToken(userName);
    }

    private boolean verifyUser(String userName) {
        return userRepository.findByName(userName).isPresent();
    }

    public LoginResponseDTO login(String userAgent, LoginRequestDTO loginRequestDTO) {
        String accessToken = getAccessToken(userAgent, loginRequestDTO);
        UserInfoDTO loginUserInfo = getUserInfoFromGitHub(accessToken);

        User user;

        if (verifyUser(loginUserInfo.getName())) {
            user = findByName(loginUserInfo.getName());
            user.updateUser(accessToken);
            userRepository.save(user);
            return new LoginResponseDTO(user, createJwtToken(user.getName()));
        }

        user = User.createUser(loginUserInfo, accessToken);
        userRepository.save(user);

        user = findByName(loginUserInfo.getName());
        return new LoginResponseDTO(user, createJwtToken(user.getName()));

    }

    public void logout(String userName) {
        User user = findByName(userName);
        user.removeAccessToken();

        userRepository.save(user);
    }

    public UsersResponseDTO userList() {
        List<UserResponseDTO> userResponseDTOS = userRepository.findAll().stream()
                .map(user -> UserResponseDTO.from(user))
                .collect(Collectors.toList());
        return UsersResponseDTO.from(userResponseDTOS);
    }
}
