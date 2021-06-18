package com.codesquad.issuetracker.service;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.codesquad.issuetracker.domain.User;
import com.codesquad.issuetracker.dto.UserInfo;
import com.codesquad.issuetracker.exception.TokenNotValidException;
import com.codesquad.issuetracker.exception.UserNotFoundException;
import com.codesquad.issuetracker.repository.UserRepository;
import com.codesquad.issuetracker.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
    }

    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    public User getUserFromUserInfo(UserInfo userInfo, String resourceServer) {
        Optional<User> user = userRepository.findByEmail(userInfo.getEmail());

        return user.orElseGet(() -> userRepository.save(new User(userInfo.getName(), userInfo.getEmail(), userInfo.getAvatarUrl(), resourceServer)));
    }

    public String getJsonWebToken(User user) {
        Map<String, Object> privateClaims = new HashMap<>();
        privateClaims.put("id", user.getId());
        privateClaims.put("email", user.getEmail());

        return JwtUtil.createToken(privateClaims);
    }

    public User getUserFromToken(String jsonWebToken) {
        DecodedJWT decodedJWT = JwtUtil.decodeToken(jsonWebToken);
        Long id = decodedJWT.getClaim("id").asLong();
        String email = decodedJWT.getClaim("email").asString();

        return userRepository.findByIdAndEmail(id, email).orElseThrow(TokenNotValidException::new);
    }
}
