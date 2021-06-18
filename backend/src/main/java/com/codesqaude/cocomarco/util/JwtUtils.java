package com.codesqaude.cocomarco.util;

import io.jsonwebtoken.*;

import java.util.Date;
import java.util.UUID;

public class JwtUtils {

    public static final String HEADER_TYPE = "Authorization";
    private static final long TOKEN_VALID_TIME = 6 * 60 * 60 * 1000L;
    private static final String TOKEN_TYPE = "Bearer";
    private static final String BLANK = " ";
    private static final String ID = "id";

    public static String create(UUID uuid, String key) {
        Claims claims = Jwts.claims();
        claims.put(ID, uuid);
        Date now = new Date();

        return TOKEN_TYPE + BLANK + Jwts.builder()
                .signWith(SignatureAlgorithm.HS256, key)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + TOKEN_VALID_TIME))
                .compact();
    }

    public static Jws<Claims> parser(String jwt, String key) {
        Jws<Claims> claimsJws = null;
        String[] tokens = jwt.split(BLANK);
        String tokenType = tokens[0];
        String jwtToken = tokens[1];

        try {
            claimsJws = Jwts.parser()
                    .setSigningKey(key)
                    .parseClaimsJws(jwtToken);
        } catch (ExpiredJwtException e) {
            //todo 예외?발생?
        }
        return claimsJws;
    }

    public static Object getId(String jwt, String key) {
        Jws<Claims> claims = parser(jwt, key);
        return claims.getBody().get(ID);
    }
}
