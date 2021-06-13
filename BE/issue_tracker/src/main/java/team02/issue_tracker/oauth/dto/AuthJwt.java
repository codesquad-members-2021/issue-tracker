package team02.issue_tracker.oauth.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@NoArgsConstructor
@Getter
public class AuthJwt {

    private String jwt;

    public AuthJwt(String jwt) {
        this.jwt = jwt;
    }
}
