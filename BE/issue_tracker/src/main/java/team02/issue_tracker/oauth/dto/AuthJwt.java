package team02.issue_tracker.oauth.dto;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@NoArgsConstructor
@Getter
public class AuthJwt {

    @JsonSetter("token_type")
    private String tokenType = "Bearer";
    private String jwt;

    public AuthJwt(String jwt) {
        this.jwt = jwt;
    }
}
