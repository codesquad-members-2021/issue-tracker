package com.jane_eno.issue_tracker.service;

import com.jane_eno.issue_tracker.auth.OAuth;
import com.jane_eno.issue_tracker.auth.dto.AccessTokenRequestDTO;
import com.jane_eno.issue_tracker.auth.dto.AccessTokenResponseDTO;
import com.jane_eno.issue_tracker.auth.dto.GitHubUser;
import com.jane_eno.issue_tracker.web.dto.response.UserResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;

@Service
@RequiredArgsConstructor
public class UserService {
    private final OAuth oauth;

    public UserResponseDTO login(String code, String host) {
        AccessTokenResponseDTO token = oauth.getToken(code, host);
        System.out.println("token: " + token);
        GitHubUser userInfo = oauth.getUserInfo(token.getAccessToken());
        System.out.println("userInfo: " + userInfo.toString());
        return new UserResponseDTO("Jeong Inho", "derosatam76@gmail.com", "eNoLJ", "tokentoken");
    }

    public void logout(String authorization) {
    }
}
