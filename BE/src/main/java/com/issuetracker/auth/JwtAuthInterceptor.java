package com.issuetracker.auth;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.issuetracker.auth.annotation.LoginRequired;
import com.issuetracker.auth.exception.HttpProtocolViolationException;
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
        String header = request.getHeader("Authorization");
        verifyHeader(header);

        String jwt = header.substring("Bearer".length()).trim();
        DecodedJWT decodedJWT = jwtUtil.verifyToken(jwt);

        Long userId = decodedJWT.getClaim(USER_ID).asLong();
        request.setAttribute("userId", userId);
    }

    private void verifyHeader(String header) {
        if (header == null || !header.startsWith("Bearer")) {
            throw new HttpProtocolViolationException();
        }
    }
}
