package com.codesquad.issuetracker.auth.component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.codesquad.issuetracker.auth.dto.GithubUser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;

@Component
public class JwtUtils {

    private static final String ISSUER = "issue-tracker";
    private static final String GITHUB = "github";

    private final Algorithm ALGORITHM;
    private final JWTVerifier jwtVerifier;

    public JwtUtils(@Value("${auth.jwt.secret}") String SECRET) {
        ALGORITHM = Algorithm.HMAC256(SECRET);
        jwtVerifier = JWT.require(ALGORITHM)
                .acceptExpiresAt(0)
                .withIssuer(ISSUER)
                .build();
    }

    public String getJwt(GithubUser user) {
        return JWT.create()
                .withClaim(GITHUB, user.getLogin())
                .withIssuer(ISSUER)
                .withExpiresAt(Date.valueOf(LocalDate.now().plusDays(2)))
                .sign(ALGORITHM);
    }

}
