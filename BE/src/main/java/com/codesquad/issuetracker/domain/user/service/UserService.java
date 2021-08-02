package com.codesquad.issuetracker.domain.user.service;

import com.codesquad.issuetracker.domain.user.UserRepository;
import com.codesquad.issuetracker.domain.user.response.UserResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final boolean OPEN_STATUS = true;
    private final boolean CLOSE_STATUS = false;

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
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

    public List<UserResponse> getAllAuthor() {
        return userRepository.findAllAuthor().stream()
                .map(user -> UserResponse.create(user))
                .collect(Collectors.toList());
    }

    public List<UserResponse> getAllAssignee(){
        return userRepository.findAllAssignee().stream()
                .map(user -> UserResponse.create(user))
                .collect(Collectors.toList());
    }


}
