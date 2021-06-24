package team02.issue_tracker.oauth.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.JwtResponse;

import java.sql.Date;
import java.time.LocalDate;

@Slf4j
@Component
public class JwtFactory {

    private static final String SECRET = "secret";

    public JwtResponse codeUserToJwt(User user) {
        String jwt = JWT.create()
                .withClaim("user_id", user.getId())
                .withIssuer("shion")
                .withExpiresAt(Date.valueOf(LocalDate.now().plusDays(2)))
                .sign(Algorithm.HMAC256(SECRET));

        return new JwtResponse(jwt);
    }
}
