package com.codesquad.issuetracker.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.util.Map;

public class JwtUtil {

    private static final String SECRET = System.getenv("JWT_SECRET");
    private static final String ISSUER = "sally.issue-tracker";

    public static String createToken(Map<String, Object> privateClaims) {
        try {
            return JWT.create()
                    .withPayload(privateClaims)
                    .withIssuer(ISSUER)
                    .sign(Algorithm.HMAC256(SECRET));
        } catch (JWTCreationException e) {
            throw new JWTCreationException("JWT Not Created: ", e.getCause());
        }
    }

    public static DecodedJWT decodeToken(String jsonWebToken) {
        try {
            return JWT.require(Algorithm.HMAC256(SECRET))
                    .withIssuer(ISSUER)
                    .build()
                    .verify(jsonWebToken);
        } catch (JWTVerificationException e) {
            throw new JWTVerificationException("JWT not valid: ", e.getCause());
        }
    }
}
