package com.issuetracker.auth;

import com.issuetracker.auth.dto.AccessTokenResponseDTO;
import com.issuetracker.auth.dto.UserResponseDTO;

public interface OAuth {

    AccessTokenResponseDTO getToken(String code, String userAgent);

    UserResponseDTO getUserInfo(String token);
}
