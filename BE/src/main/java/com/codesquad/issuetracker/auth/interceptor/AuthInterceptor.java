package com.codesquad.issuetracker.auth.interceptor;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.codesquad.issuetracker.auth.component.JwtUtils;
import com.codesquad.issuetracker.user.domain.User;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class AuthInterceptor implements HandlerInterceptor {

    private final JwtUtils jwtUtils;

    public AuthInterceptor(JwtUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = getJwt(request);
        request.setAttribute("author", jwtUtils.getUserFromJwt(token));
        return true;
    }

    private String getJwt(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader == null) {
            throw new RuntimeException("토큰 없음");
        }

        if (!authorizationHeader.startsWith("Bearer")) {
            throw new RuntimeException("토큰 타입 이상");
        }
        return authorizationHeader.substring("Bearer".length()).trim();
    }
}