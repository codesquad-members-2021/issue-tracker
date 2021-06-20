package team02.issue_tracker.oauth.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.stereotype.Component;

@Component
public class JwtDecoder {

    public Long decodeJwtToUserId(String jwt) {
        JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256("secret"))
                .withIssuer("shion")
                .build();
        DecodedJWT decodedJwt = jwtVerifier.verify(jwt);
        return decodedJwt.getClaim("user_id").asLong();
    }
}
