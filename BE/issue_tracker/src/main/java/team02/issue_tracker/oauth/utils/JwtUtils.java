package team02.issue_tracker.oauth.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.AuthJwt;

import java.sql.Date;
import java.time.LocalDate;

@Slf4j
@Component
public class JwtUtils {

    private final String SECRET = "secret";

    public AuthJwt getJwt(User user) {
        String token = JWT.create()
                .withClaim("user_id", user.getId())
                .withIssuer("shion")
                .withExpiresAt(Date.valueOf(LocalDate.now().plusDays(1)))
                .sign(Algorithm.HMAC256(SECRET));

        return new AuthJwt(token);
    }

    public DecodedJWT decode(String jwt) {
        return JWT.require(Algorithm.HMAC256(SECRET))
                .withIssuer("shion")
                .build()
                .verify(jwt);
    }
}
