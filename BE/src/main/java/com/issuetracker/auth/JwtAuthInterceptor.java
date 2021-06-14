package com.issuetracker.auth;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.issuetracker.auth.annotation.LoginRequired;
import com.issuetracker.auth.exception.HttpHeaderFormatException;
import com.issuetracker.auth.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static com.issuetracker.auth.util.JwtUtil.USER_ID;

@Component
@RequiredArgsConstructor
public class JwtAuthInterceptor implements HandlerInterceptor {

    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";
    private final JwtUtil jwtUtil;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        if (loginRequired(handler)) {
            verifyJwt(request);
        }
        return true;
    }

    private boolean loginRequired(Object handler) {
        return handler instanceof HandlerMethod
                && ((HandlerMethod) handler).hasMethodAnnotation(LoginRequired.class);
    }

    private void verifyJwt(HttpServletRequest request) {
        String header = request.getHeader(AUTHORIZATION);
        verifyHeader(header);

        String jwt = header.substring(BEARER.length()).trim();
        DecodedJWT decodedJWT = jwtUtil.verifyToken(jwt);

        request.setAttribute(USER_ID, jwtUtil.getUserId(decodedJWT));
    }

    private void verifyHeader(String header) {
        if (header == null || !header.startsWith(BEARER)) {
            throw new HttpHeaderFormatException();
        }
    }
}
