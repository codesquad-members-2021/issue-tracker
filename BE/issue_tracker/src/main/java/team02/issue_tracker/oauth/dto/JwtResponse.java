package team02.issue_tracker.oauth.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@NoArgsConstructor
@Getter
public class JwtResponse {

    private String jwt;

    public JwtResponse(String jwt) {
        this.jwt = jwt;
    }
}
