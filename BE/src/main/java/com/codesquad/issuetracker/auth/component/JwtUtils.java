package com.codesquad.issuetracker.auth.component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.codesquad.issuetracker.auth.dto.GitHubUser;
import com.codesquad.issuetracker.user.domain.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;

@Component
public class JwtUtils {

    private static final String ISSUER = "issue-tracker";
    private static final String ID = "id";
    private static final String NICKNAME = "nickName";
    private static final String IMAGE_URL = "imageUrl";

    private final Algorithm ALGORITHM;
    private final JWTVerifier jwtVerifier;

    public JwtUtils(@Value("${auth.jwt.secret}") String SECRET) {
        ALGORITHM = Algorithm.HMAC256(SECRET);
        jwtVerifier = JWT.require(ALGORITHM)
                .acceptExpiresAt(0)
                .withIssuer(ISSUER)
                .build();
    }

    public String getJwt(User user) {
        return JWT.create()
                .withClaim(ID, user.getId().toString())
                .withClaim(NICKNAME, user.getNickName())
                .withClaim(IMAGE_URL, user.getImageUrl())
                .withIssuer(ISSUER)
                .withExpiresAt(Date.valueOf(LocalDate.now().plusDays(2)))
                .sign(ALGORITHM);
    }

}
