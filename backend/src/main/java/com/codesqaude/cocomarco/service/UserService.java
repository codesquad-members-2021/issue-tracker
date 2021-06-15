package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.common.exception.NotFoundUserException;
import com.codesqaude.cocomarco.domain.user.*;
import com.codesqaude.cocomarco.domain.user.dto.JwtResponse;
import com.codesqaude.cocomarco.util.JwtUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;
    private final GitOauth oauth;
    private static final String key = "q1w2e3r4";

    public User findById(UUID userId) {
        return userRepository.findById(userId).orElseThrow(NotFoundUserException::new);
    }

    @Transactional
    public JwtResponse login(String code) {
        AccessToken accessToken = oauth.accessToken(code);
        GitUserInfo userInfo = oauth.userInfo(accessToken);
        return new JwtResponse(JwtUtils.create(insertUser(userInfo),key));
    }

    public UUID insertUser(GitUserInfo userInfo){
        Optional<User> DBUser = userRepository.findByGithubId(userInfo.getId());

        if (DBUser.isPresent()) {
            //update
            User user = DBUser.get();
            user.update(userInfo.toEntity());
            return user.getId();
        }

        // create
        User user = userInfo.toEntity();
        return userRepository.save(user).getId();
    }
}
