package com.codesquad.issuetracker.auth.component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.codesquad.issuetracker.user.domain.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;
import java.util.UUID;

@Component
public class JwtUtils {

    private static final String ISSUER = "issue-tracker";
    private static final String ID = "id";
    private static final String NICKNAME = "nickname";
    private static final String IMAGE_URL = "imageUrl";
    private static final String GITHUB_ID = "gitHubId";
    private static final String APPLE_ID = "appleId";

    private final Algorithm ALGORITHM;
    private final JWTVerifier jwtVerifier;

    public JwtUtils(@Value("${auth.jwt.secret}") String secret) {
        ALGORITHM = Algorithm.HMAC256(secret);
        jwtVerifier = JWT.require(ALGORITHM)
                .acceptExpiresAt(0)
                .withIssuer(ISSUER)
                .build();
    }

    public String getJwt(User user) {
        return JWT.create()
                .withClaim(ID, user.getId().toString())
                .withClaim(NICKNAME, user.getNickname())
                .withClaim(IMAGE_URL, user.getImageUrl())
                .withClaim(GITHUB_ID, user.getGitHubId())
                .withClaim(APPLE_ID, user.getAppleId())
                .withIssuer(ISSUER)
                .withExpiresAt(Date.valueOf(LocalDate.now().plusDays(2)))
                .sign(ALGORITHM);
    }

    public User getUserFromJwt(String token) {
        DecodedJWT jwt = jwtVerifier.verify(token);
        return User.instanceOf(
                UUID.fromString(jwt.getClaim(ID).asString()),
                jwt.getClaim(NICKNAME).asString(),
                jwt.getClaim(IMAGE_URL).asString(),
                jwt.getClaim(GITHUB_ID).asString(),
                jwt.getClaim(APPLE_ID).asString()
        );
    }
}
