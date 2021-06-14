package com.issuetracker.auth;

import com.issuetracker.auth.dto.AccessTokenResponseDTO;
import com.issuetracker.auth.dto.GitHubUserResponseDTO;

public interface OAuth {

    AccessTokenResponseDTO getToken(String code, String userAgent);

    GitHubUserResponseDTO getUserInfo(String token);
}
