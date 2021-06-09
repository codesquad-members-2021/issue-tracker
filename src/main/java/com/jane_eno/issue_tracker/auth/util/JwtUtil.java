package com.jane_eno.issue_tracker.auth.util;


import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.jane_eno.issue_tracker.domain.user.User;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@NoArgsConstructor
public class JwtUtil {
    public static final String GITHUB_NAME = "githubName";

    @Value("${jwt.issuer}")
    private String ISSUER;

    @Value("${jwt.secret_key}")
    private String SECRET_KEY;

    public String createToken(User user) {
        return JWT.create()
                .withExpiresAt(new Date())
                .withClaim(GITHUB_NAME, user.getName())
                .withIssuer(ISSUER)
                .sign(Algorithm.HMAC256(SECRET_KEY));
    }

    public DecodedJWT verifyToken(String jwt) {
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SECRET_KEY))
                .acceptExpiresAt(60 * 10)
                .withIssuer(ISSUER)
                .build();
        return verifier.verify(jwt);
    }
}
