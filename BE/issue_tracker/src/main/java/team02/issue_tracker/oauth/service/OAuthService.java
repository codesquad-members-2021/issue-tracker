package team02.issue_tracker.oauth.service;

import team02.issue_tracker.oauth.dto.AccessToken;
import team02.issue_tracker.oauth.dto.SocialLogin;
import team02.issue_tracker.oauth.dto.SocialProfile;

public interface OAuthService {

    AccessToken accessToken(final String code, final SocialLogin oauthResource);

    SocialProfile userProfile(final AccessToken accessToken);
}
