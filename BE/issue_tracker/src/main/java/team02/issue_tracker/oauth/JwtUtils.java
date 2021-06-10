package team02.issue_tracker.oauth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import team02.issue_tracker.oauth.dto.AuthJwt;
import team02.issue_tracker.oauth.dto.GithubUserProfile;

import java.sql.Date;
import java.time.LocalDate;

@Slf4j
@Component
public class JwtUtils {

    public AuthJwt getJwt(GithubUserProfile user) {
        String token = JWT.create()
                .withClaim("id", user.getId())
                .withClaim("name", user.getName())
                .withClaim("email", user.getEmail())
                .withIssuer("shion")
                .withExpiresAt(Date.valueOf(LocalDate.now().plusDays(2)))
                .sign(Algorithm.HMAC256("secret"));

        return new AuthJwt(token);
    }

    public String decodeJwt(DecodedJWT jwt) {
        Long id = jwt.getClaim("id").asLong();
        String name = jwt.getClaim("name").asString();
        String email = jwt.getClaim("email").asString();

        log.info("id : {}, name : {}, email : {}", id, name, email);
        return "id : " + id + ", name : " + name + ", email : " + email;
    }

    public DecodedJWT decode(String token) {
        return JWT.require(Algorithm.HMAC256("secret"))
                .withIssuer("shion")
                .build()
                .verify(token);
    }
}
