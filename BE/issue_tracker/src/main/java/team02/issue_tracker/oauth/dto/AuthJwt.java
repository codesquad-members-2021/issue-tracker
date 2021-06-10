package team02.issue_tracker.oauth.dto;

import lombok.Getter;

@Getter
public class AuthJwt {

    public static String tokenType = "Bearer";
    public String jwt;

    public AuthJwt(String jwt) {
        this.jwt = jwt;
    }
}
