package com.issuetracker.service;

import com.issuetracker.auth.OAuth;
import com.issuetracker.auth.dto.AccessTokenResponseDTO;
import com.issuetracker.auth.dto.GitHubUserResponseDTO;
import com.issuetracker.auth.dto.UserAgent;
import com.issuetracker.auth.service.JwtService;
import com.issuetracker.domain.user.User;
import com.issuetracker.domain.user.UserRepository;
import com.issuetracker.exception.UserNotFoundException;
import com.issuetracker.web.dto.response.vo.Assignee;
import com.issuetracker.domain.issue.Issue;
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
    private final JwtService jwtUtil;

    public List<User> findAssignees(List<Long> assigneeIdList) {
        return userRepository.findAllById(assigneeIdList);
    }

    public UserResponseDTO login(String code, UserAgent userAgent) {
        AccessTokenResponseDTO token = oauth.getToken(code, userAgent.getUserAgent());
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
        return userRepository.findById(id).orElseThrow(UserNotFoundException::new);
    }

    public List<Assignee> usersToAssignees(Issue issue) {
        return userRepository.findAll().stream()
                .map(user -> Assignee.of(user, issue, checkAssignees(user, issue)))
                .collect(Collectors.toList());
    }

    private boolean checkAssignees(User user, Issue issue) {
        long count = issue.getAssignees().stream()
                .filter(assignee -> assignee.equals(user))
                .count();
        return count > 0;
    }

    public List<Assignee> usersToAssignees() {
        return userRepository.findAll().stream()
                .map(Assignee::of)
                .collect(Collectors.toList());
    }

    private User findByUserName(String userName) {
        return userRepository.findByUserName(userName).orElseThrow(
                () -> new UserNotFoundException("Cannot find user by given username.")
        );
    }

    private boolean verifyUser(String userName) {
        return userRepository.findByUserName(userName).isPresent();
    }
}
