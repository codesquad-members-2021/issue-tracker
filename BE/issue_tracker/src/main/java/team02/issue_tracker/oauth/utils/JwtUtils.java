package team02.issue_tracker.oauth.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.SocialLogin;
import team02.issue_tracker.oauth.dto.AuthJwt;

import java.sql.Date;
import java.time.LocalDate;

@Slf4j
@Component
public class JwtUtils {

    public AuthJwt getJwt(User user) {
        String token = JWT.create()
                .withClaim("id", user.getId())
                .withClaim("rss", user.getOauthResource().name())
                .withClaim("name", user.getUsername())
                .withClaim("email", user.getEmail())
                .withClaim("profile", user.getProfileImage())
                .withIssuer("shion")
                .withExpiresAt(Date.valueOf(LocalDate.now().plusDays(1)))
                .sign(Algorithm.HMAC256("secret"));

        return new AuthJwt(token);
    }

    public User decodeJwt(DecodedJWT jwt) {
        Long id = jwt.getClaim("id").asLong();
        String oauthResource = jwt.getClaim("rss").asString();
        String name = jwt.getClaim("name").asString();
        String email = jwt.getClaim("email").asString();
        String profile = jwt.getClaim("profile").asString();

        User user = User.builder()
                .oauthResource(SocialLogin.valueOf(oauthResource))
                .username(name)
                .email(email)
                .profileImage(profile)
                .build();

        log.info("user : {}", user.toString());
        return user;
    }

    public DecodedJWT decode(String token) {
        return JWT.require(Algorithm.HMAC256("secret"))
                .withIssuer("shion")
                .build()
                .verify(token);
    }
}
