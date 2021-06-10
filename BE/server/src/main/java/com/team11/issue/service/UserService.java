package com.team11.issue.service;

import com.team11.issue.dto.oauth.UserInfoDTO;
import com.team11.issue.dto.user.LoginRequestDTO;
import com.team11.issue.oauth.GitHubOauth;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final GitHubOauth gitHubOauth;

    public UserService(GitHubOauth gitHubOauth) {
        this.gitHubOauth = gitHubOauth;
    }


    /*TODO: Exception Handler 추가*/
    private String getAccessToken(LoginRequestDTO loginRequestDTO) {
        return gitHubOauth.getAccessToken(loginRequestDTO).orElseThrow(() -> new RuntimeException());
    }

    private UserInfoDTO getUserInfoFromGitHub(String accessToken) {
        return gitHubOauth.getUserInfoFromGitHub(accessToken);
    }

    public void login(LoginRequestDTO loginRequestDTO) {
        String accessToken = getAccessToken(loginRequestDTO);
        UserInfoDTO userInfo = getUserInfoFromGitHub(accessToken);
        System.out.println(userInfo.toString());
    }
}
