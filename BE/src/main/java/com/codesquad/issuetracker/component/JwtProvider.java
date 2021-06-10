package com.codesquad.issuetracker.component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.util.Base64;
import java.util.Date;

@Component
public class JwtProvider {

    private final Logger logger = LoggerFactory.getLogger(JwtProvider.class);

    private String secretKey;
    private long validityInMilliseconds;

    public JwtProvider(@Value("&{security.jwt.token.secret-key}") String secretKey, @Value("${security.jwt.token.expire-length}") long validityInMilliseconds) {
        this.secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
        this.validityInMilliseconds = validityInMilliseconds;
    }

    public String createJwt(Long id) {
        Claims claims = Jwts.claims().setSubject(String.valueOf(id));

        Date now = new Date();
        Date validity = new Date(now.getTime() + validityInMilliseconds); // 유효시간 (지금 + 유효기간)
        logger.info("now: {}", now);
        logger.info("validity: {}", validity);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    // 토큰에서 값 추출(sub)
    public Long getSubject(String token) {
        return Long.valueOf(Jwts.parser()
        .setSigningKey(secretKey)
        .parseClaimsJws(token)
        .getBody()
        .getSubject());
    }
    
    // 유효한 토큰인지 확인
    public boolean validateToken(String token) {
        Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
        return !claims.getBody().getExpiration().before(new Date());
    }
}
