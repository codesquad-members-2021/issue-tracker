package com.codesqaude.cocomarco.util;

import io.jsonwebtoken.*;

import java.util.Date;
import java.util.UUID;

public class JwtUtils {

    private static final long TOKEN_VALID_TIME = 6 * 60 * 60 * 1000L;
    private static final String TOKEN_TYPE = "Bearer";
    private static final String BLANK = " ";

    public static String create(UUID uuid, String key) {
        Claims claims = Jwts.claims();
        claims.put("id", uuid);
        Date now = new Date();

        return TOKEN_TYPE + BLANK + Jwts.builder()
                .signWith(SignatureAlgorithm.HS256, key)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + TOKEN_VALID_TIME))
                .compact();
    }

    public static boolean validateJwt(String jwt, String key) {
        String[] tokens = jwt.split(BLANK);
        String tokenType = tokens[0];
        String jwtToken = tokens[1];

        try {
            Jwts.parser()
                    .setSigningKey(key)
                    .parseClaimsJws(jwtToken);
        } catch (ExpiredJwtException e) {
            //todo 예외?발생?
        }
        return true;
    }

    public static Jws<Claims> getClaims(String jwt, String key) {
        validateJwt(jwt, key);

        String[] tokens = jwt.split(BLANK);
        String tokenType = tokens[0];
        String jwtToken = tokens[1];

        return Jwts.parser()
                .setSigningKey(key)
                .parseClaimsJws(jwtToken);
    }

    public static Object getId(String jwt, String key) {
        Jws<Claims> claims = getClaims(jwt, key);
        return claims.getBody().get("id");
    }
}
