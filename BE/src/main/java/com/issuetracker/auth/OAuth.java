package com.issuetracker.auth;

import com.issuetracker.auth.dto.AccessTokenResponseDTO;
import com.issuetracker.auth.dto.OAuthUserResponseDTO;

public interface OAuth {

    AccessTokenResponseDTO getToken(String code, String userAgent);

    OAuthUserResponseDTO getUserInfo(String token);
}
