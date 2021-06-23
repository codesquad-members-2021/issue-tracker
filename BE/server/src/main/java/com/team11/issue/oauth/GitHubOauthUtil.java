package com.team11.issue.oauth;

import com.team11.issue.exception.OauthException;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


@Getter
@Component
public class GitHubOauthUtil {

    private static final String FE = "fe";
    private static final String IOS = "ios";

    @Value("${github.fe.client.id}")
    private String feClientId;

    @Value("${github.fe.client.secret}")
    private String feClientSecret;

    @Value("${github.ios.client.id}")
    private String iOSClientId;

    @Value("${github.ios.client.secret}")
    private String iOSClientSecret;

    @Value("${github.access.token.url}")
    private String accessTokenUrl;

    @Value("${github.user.info.url}")
    private String userInfoUrl;

    private String clientId;
    private String clientSecret;


    public void setGitHubOauthInfo(String type) {
        if (type == null) {
            throw new OauthException("잘못된 헤더의 요청을 보내셨습니다.");
        }

        if (type.equals(FE)) {
            this.clientId = feClientId;
            this.clientSecret = feClientSecret;
        }

        if (type.equals(IOS)) {
            this.clientId = iOSClientId;
            this.clientSecret = iOSClientSecret;
        }
    }

}
