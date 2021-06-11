package com.jane_eno.issue_tracker.auth;

import com.jane_eno.issue_tracker.auth.dto.AccessTokenResponseDTO;
import com.jane_eno.issue_tracker.auth.dto.GitHubUserResponseDTO;

public interface OAuth {

    AccessTokenResponseDTO getToken(String code, String userAgent);

    GitHubUserResponseDTO getUserInfo(String token);
}
