package com.jane_eno.issue_tracker.auth;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.jane_eno.issue_tracker.auth.annotation.LoginRequired;
import com.jane_eno.issue_tracker.auth.exception.HttpProtocolViolationException;
import com.jane_eno.issue_tracker.auth.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static com.jane_eno.issue_tracker.auth.util.JwtUtil.GITHUB_NAME;

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

        String userName = decodedJWT.getClaim(GITHUB_NAME).asString();
        request.setAttribute("userName", userName);
    }

    private void verifyHeader(String header) {
        if (header == null || !header.startsWith("Bearer")) {
            throw new HttpProtocolViolationException();
        }
    }
}
