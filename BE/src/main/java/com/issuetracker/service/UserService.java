package com.issuetracker.service;

import com.issuetracker.auth.OAuth;
import com.issuetracker.auth.dto.AccessTokenResponseDTO;
import com.issuetracker.auth.dto.GitHubUserResponseDTO;
import com.issuetracker.auth.util.JwtUtil;
import com.issuetracker.domain.user.User;
import com.issuetracker.domain.user.UserRepository;
import com.issuetracker.web.dto.response.vo.Assignee;
import com.issuetracker.domain.issue.Issue;
import com.issuetracker.exception.ElementNotFoundException;
import com.issuetracker.web.dto.response.UserResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final OAuth oauth;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public List<User> findAssignees(List<Long> assigneeIdList) {
        return userRepository.findAllById(assigneeIdList);
    }

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
        User user = findUserById(userId);
        user.removeToken();
        userRepository.save(user);
    }

    public User findUserById(Long id) {
        return userRepository.findById(id).orElseThrow(
                () -> new ElementNotFoundException("Cannot find user by given user id.")
        );
    }

    public List<Assignee> usersToAssignees(Issue issue) {
        return userRepository.findAll().stream()
                .map(user -> Assignee.of(user, issue))
                .collect(Collectors.toList());
    }

    public List<Assignee> usersToAssignees() {
        return userRepository.findAll().stream()
                .map(Assignee::of)
                .collect(Collectors.toList());
    }

    private User findByUserName(String userName) {
        return userRepository.findByUserName(userName).orElseThrow(
                () -> new ElementNotFoundException("Cannot find user by given user name.")
        );
    }

    private boolean verifyUser(String userName) {
        return userRepository.findByUserName(userName).isPresent();
    }
}
