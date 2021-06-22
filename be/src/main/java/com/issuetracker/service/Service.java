package com.issuetracker.service;

import com.issuetracker.oauth.UserDto;
import com.issuetracker.repository.UserRepository;

import java.util.List;
import java.util.stream.Collectors;

@org.springframework.stereotype.Service
public class Service {
    private UserRepository userRepository;

    public Service(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDto> searchAllAssignees() {
        userRepository.findAll();
        return userRepository.findAll().stream()
                .map(user -> UserDto.of(user))
                .collect(Collectors.toList());
    }

    public List<UserDto> searchAllAuthors() {
        return userRepository.findAllAuthors().stream()
                .map(user -> UserDto.of(user))
                .collect(Collectors.toList());
    }
}
