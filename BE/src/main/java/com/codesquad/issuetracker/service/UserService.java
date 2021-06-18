package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.repository.UserRepository;
import com.codesquad.issuetracker.response.UserResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final boolean OPEN_STATUS = true;
    private final boolean CLOSE_STATUS = false;

    private final UserRepository userRepository;

    public UserService(UserRepository userRepositoryl) {
        this.userRepository = userRepositoryl;
    }

    public List<UserResponse> getAllOpenIssueAuthor() {
        return getAllAuthor(OPEN_STATUS);
    }

    public List<UserResponse> getAllCloseIssueAuthor() {
        return getAllAuthor(CLOSE_STATUS);
    }

    private List<UserResponse> getAllAuthor(boolean isOpen) {
        return userRepository.findAllAuthor(isOpen).stream()
                .map(user -> UserResponse.create(user))
                .collect(Collectors.toList());
    }


}
