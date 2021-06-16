package com.codesqaude.cocomarco.domain.oauth;

import com.codesqaude.cocomarco.domain.oauth.dto.AccessToken;

public interface Oauth {

    AccessToken accessToken(String code);

    UserInfo userInfo(AccessToken accessToken);
}
