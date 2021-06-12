package com.team11.issue.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.fasterxml.jackson.databind.node.TextNode;

import java.util.Date;

public class JwtUtil {

    private static final String SECRET = "secret";
    private static final String CLAIM_KEY = "userName";
    private static final Algorithm algorithmHS = Algorithm.HMAC256(SECRET);


    public static String createToken(String userName) {
        return JWT.create()
                .withClaim(CLAIM_KEY, userName)
                .withExpiresAt(new Date())
                .sign(algorithmHS);
    }

    public static String getUserIdFromJwtToken(String token) {
        DecodedJWT decodedJWT = verifyToken(token);
        return decodedJWT.getClaims().get(CLAIM_KEY).as(TextNode.class).asText();
    }

    private static DecodedJWT verifyToken(String token) {
        try {
            JWTVerifier verifier = JWT.require(algorithmHS)
                    .acceptExpiresAt(3600)
                    .build();
            return verifier.verify(token);
        } catch (JWTDecodeException | TokenExpiredException e) {
            throw new RuntimeException();
        }
    }
}
