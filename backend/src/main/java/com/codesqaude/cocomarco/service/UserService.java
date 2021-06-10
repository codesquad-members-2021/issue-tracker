package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.common.exception.NotFoundUserException;
import com.codesqaude.cocomarco.domain.user.User;
import com.codesqaude.cocomarco.domain.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UUID join(String name, String avatarImage) {
        return userRepository.save(new User(name, avatarImage)).getId();
    }

    public User findById(UUID userId) {
        return userRepository.findById(userId).orElseThrow(NotFoundUserException::new);
    }
}
