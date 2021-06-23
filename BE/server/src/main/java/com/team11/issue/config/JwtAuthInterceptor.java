package com.team11.issue.config;

import com.team11.issue.exception.JWTTokenException;
import com.team11.issue.util.JwtUtil;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class JwtAuthInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            return true;
        }

        String token = getJwtToken(request);
        String userName = JwtUtil.getUserIdFromJwtToken(token);
        request.setAttribute("userName", userName);
        return true;

    }

    private String getJwtToken(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader == null) {
            throw new JWTTokenException("토큰이 없습니다.");
        }

        if (!authorizationHeader.startsWith("Bearer ")) {
            throw new JWTTokenException("토큰 타입이 이상합니다.");
        }

        return authorizationHeader.substring(7);
    }

}
