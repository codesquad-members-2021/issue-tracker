package com.team11.issue.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.fasterxml.jackson.databind.node.TextNode;
import com.team11.issue.exception.JWTTokenException;

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
                    .acceptExpiresAt(10800)
                    .build();
            return verifier.verify(token);
        } catch (TokenExpiredException e) {
            throw new JWTTokenException("토큰 만료기한이 지났습니다. 다시 발급해주세요.");
        } catch (JWTDecodeException e) {
            throw new JWTTokenException("유효하지 않은 토큰입니다. 다시 발급해주세요.");
        }
    }
}
