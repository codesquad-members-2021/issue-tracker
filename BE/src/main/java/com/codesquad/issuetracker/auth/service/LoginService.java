package com.codesquad.issuetracker.auth.service;

import com.codesquad.issuetracker.auth.JwtProvider;
import com.codesquad.issuetracker.auth.domain.GitHubUser;
import com.codesquad.issuetracker.auth.domain.JwtAuthenticationInfo;
import com.codesquad.issuetracker.auth.response.GitHubUserResponse;
import com.codesquad.issuetracker.domain.user.User;
import com.codesquad.issuetracker.domain.user.UserRepository;
import lombok.extern.slf4j.Slf4j;

import java.util.Optional;

@Slf4j
public class LoginService {

    private JwtProvider jwtProvider;

    private UserRepository userRepository;

    public LoginService(JwtProvider jwtProvider, UserRepository userRepository) {
        this.jwtProvider = jwtProvider;
        this.userRepository = userRepository;
    }

    private Optional<User> signUp(GitHubUser gitHubUser) {
        log.debug("github user : {}", gitHubUser);
        if (!userRepository.findByLoginId(gitHubUser.getLoginId()).isPresent()) {
            User user = User.githubUserToUser(gitHubUser);
            log.debug("User : {} ", user);
            userRepository.save(user);
        }
        return userRepository.findByLoginId(gitHubUser.getLoginId());
    }

    public GitHubUserResponse signIn(JwtAuthenticationInfo jwtAuthenticationInfo) {
        User user = signUp(jwtAuthenticationInfo.getUser()).orElseThrow(IllegalArgumentException::new);
        String jwt = jwtProvider.createJwt(user);
        return GitHubUserResponse.create(jwt, user, jwtAuthenticationInfo.getTokenType());
    }
}
