package com.issuetracker.auth.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.issuetracker.domain.user.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtService {

    private static final int EXPIRATION_TIME = 60 * 100;
    public static final String USER_ID = "userId";
    private final String ISSUER;
    private final String SECRET_KEY;

    public JwtService(@Value("${jwt.issuer}") String ISSUER,
                      @Value("${jwt.secret_key}") String SECRET_KEY) {
        this.ISSUER = ISSUER;
        this.SECRET_KEY = SECRET_KEY;
    }

    public String createToken(User user) {
        return JWT.create()
                .withExpiresAt(new Date())
                .withClaim(USER_ID, user.getId())
                .withIssuer(ISSUER)
                .sign(Algorithm.HMAC256(SECRET_KEY));
    }

    public DecodedJWT verifyToken(String jwt) {
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SECRET_KEY))
                .acceptExpiresAt(EXPIRATION_TIME)
                .withIssuer(ISSUER)
                .build();
        return verifier.verify(jwt);
    }

    public Long getUserId(DecodedJWT jwt) {
        return jwt.getClaim(USER_ID).asLong();
    }
}
