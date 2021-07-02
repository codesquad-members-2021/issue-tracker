package com.issuetracker.oauth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.issuetracker.util.Oauth;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class OauthInterceptor implements HandlerInterceptor {

    private final JWTVerifier verifier;

    public OauthInterceptor(Oauth oauthUtil) {
        Algorithm algorithm = Algorithm.HMAC256(oauthUtil.getAlgorithmSecret());
        verifier = JWT.require(algorithm)
                .withIssuer(oauthUtil.getIssuer())
                .build();
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String jwt = request.getHeader("Authorization").substring(7);
        DecodedJWT decodedJWT = verifier.verify(jwt);
        String name = decodedJWT.getClaim("name").asString();
        Long id = decodedJWT.getClaim("id").asLong();
        String avatar_url = decodedJWT.getClaim("avatar_url").asString();
        User user = new User(name, id, avatar_url);
        request.setAttribute("user", user);
        return true;
    }
}
