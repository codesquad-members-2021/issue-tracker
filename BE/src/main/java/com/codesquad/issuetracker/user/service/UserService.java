package com.codesquad.issuetracker.user.service;

import com.codesquad.issuetracker.user.dto.UserDto;
import com.codesquad.issuetracker.user.dto.UsersWrapper;
import com.codesquad.issuetracker.user.infra.UserRepository;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UsersWrapper readAllUsers() {
        return UsersWrapper.wrap(userRepository.findAll().stream()
                .map(UserDto::fromEntity)
                .collect(Collectors.toList()));
    }
}
