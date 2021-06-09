package com.jane_eno.issue_tracker.auth;


import com.jane_eno.issue_tracker.auth.dto.AccessTokenResponseDTO;
import com.jane_eno.issue_tracker.auth.dto.GitHubUser;

public interface OAuth {

    AccessTokenResponseDTO getToken(String code, String host);

    GitHubUser getUserInfo(String token);

//    EmailDTO getEmail(String token);
}
