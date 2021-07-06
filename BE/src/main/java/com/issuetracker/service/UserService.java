package com.issuetracker.service;

import com.issuetracker.auth.OAuth;
import com.issuetracker.auth.dto.AccessTokenResponseDTO;
import com.issuetracker.auth.dto.OAuthUserResponseDTO;
import com.issuetracker.auth.dto.UserAgentDTO;
import com.issuetracker.auth.service.JwtService;
import com.issuetracker.domain.elasticsearch.IssueDocument;
import com.issuetracker.domain.user.User;
import com.issuetracker.domain.user.UserRepository;
import com.issuetracker.exception.UserNotFoundException;
import com.issuetracker.web.dto.response.AssigneesResponseDTO;
import com.issuetracker.web.dto.response.AuthorsResponseDTO;
import com.issuetracker.web.dto.response.UserResponseDTO;
import com.issuetracker.web.dto.vo.Assignee;
import com.issuetracker.domain.issue.Issue;
import com.issuetracker.web.dto.vo.Author;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final OAuth oauth;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    public List<User> findAssignees(List<Long> assigneeIdList) {
        return userRepository.findAllById(assigneeIdList);
    }

    public UserResponseDTO login(String code, UserAgentDTO userAgentDTO) {
        AccessTokenResponseDTO token = oauth.getToken(code, userAgentDTO.getUserAgent());
        OAuthUserResponseDTO userInfo = oauth.getUserInfo(token.getAccessToken());
        if (verifyUser(userInfo.getLogin())) {
            User user = findUserByUserName(userInfo.getLogin());
            user.update(userInfo, token.getAccessToken());
            return UserResponseDTO.of(user, jwtService.createToken(userRepository.save(user)));
        }
        User user = User.createUser(userInfo, token);
        return UserResponseDTO.of(user, jwtService.createToken(userRepository.save(user)));
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
                .map(user -> Assignee.of(user, checkAssignees(user, issue)))
                .collect(Collectors.toList());
    }

    public List<Assignee> userDocumentsToAssignees(IssueDocument issueDocument) {
        return issueDocument.getAssignees().stream()
                .map(Assignee::of)
                .collect(Collectors.toList());
    }

    public AssigneesResponseDTO getAssignees() {
        List<Assignee> assignees = userRepository.findAssignees().stream()
                .map(assignee -> Assignee.of(assignee, false))
                .collect(Collectors.toList());
        return new AssigneesResponseDTO(assignees);
    }

    public List<Assignee> getCheckedAssignees(Issue issue) {
        return issue.getAssignees().stream()
                .map(assignee -> Assignee.of(assignee, true))
                .collect(Collectors.toList());
    }

    public AuthorsResponseDTO getAuthors() {
        List<Author> authors = userRepository.findAuthors().stream()
                .map(Author::of)
                .collect(Collectors.toList());
        return new AuthorsResponseDTO(authors);
    }

    private boolean checkAssignees(User user, Issue issue) {
        long count = issue.getAssignees().stream()
                .filter(assignee -> assignee.equals(user))
                .count();
        return count > 0;
    }

    public List<Assignee> usersToAssignees() {
        return userRepository.findAll().stream()
                .map(assignee -> Assignee.of(assignee, false))
                .collect(Collectors.toList());
    }

    public User findUserByUserName(String userName) {
        return userRepository.findByUserName(userName).orElseThrow(UserNotFoundException::new);
    }

    public UserResponseDTO getUserInfo(Long userId) {
        return UserResponseDTO.of(findUserById(userId));
    }

    private boolean verifyUser(String userName) {
        return userRepository.findByUserName(userName).isPresent();
    }
}
