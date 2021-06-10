package com.team11.issue.oauth;

import com.team11.issue.dto.oauth.UserInfoDTO;
import com.team11.issue.dto.user.LoginRequestDTO;

import java.util.Optional;

public interface Oauth {

    Optional<String> getAccessToken(LoginRequestDTO loginRequestDTO);

    UserInfoDTO getUserInfoFromGitHub(String accessToken);

}
