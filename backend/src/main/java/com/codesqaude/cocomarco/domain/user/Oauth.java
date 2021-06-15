package com.codesqaude.cocomarco.domain.user;

public interface Oauth {

    AccessToken accessToken(String code);

    UserInfo userInfo(AccessToken accessToken);
}
