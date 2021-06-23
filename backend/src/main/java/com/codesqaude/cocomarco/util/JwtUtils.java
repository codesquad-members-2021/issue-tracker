package com.codesqaude.cocomarco.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

@Component
public class JwtUtils {

    public static String JWT_KEY;
    public static final String HEADER_TYPE = "Authorization";
    private static final long TOKEN_VALID_TIME = 1L;
    private static final String TOKEN_TYPE = "Bearer";
    private static final String BLANK = " ";
    private static final String ID = "id";

    public JwtUtils(@Value("${jwt.key}") String JWT_KEY) {
        this.JWT_KEY = JWT_KEY;
    }

    public static String create(UUID uuid) {
        Claims claims = Jwts.claims();
        claims.put(ID, uuid);
        Date now = new Date();

        return TOKEN_TYPE + BLANK + Jwts.builder()
                .signWith(SignatureAlgorithm.HS256, JWT_KEY)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + TOKEN_VALID_TIME))
                .compact();
    }

    public static Jws<Claims> parser(String jwt) {
        String[] tokens = jwt.split(BLANK);
        String tokenType = tokens[0];
        String jwtToken = tokens[1];

        Jws<Claims> claimsJws = Jwts.parser()
                .setSigningKey(JWT_KEY)
                .parseClaimsJws(jwtToken);
        return claimsJws;
    }

    public static Object getId(String jwt) {
        Jws<Claims> claims = parser(jwt);
        return claims.getBody().get(ID);
    }
}
