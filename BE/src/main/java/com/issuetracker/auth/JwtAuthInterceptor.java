package com.issuetracker.auth;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.issuetracker.auth.annotation.LoginRequired;
import com.issuetracker.auth.exception.HttpHeaderFormatException;
import com.issuetracker.auth.service.JwtService;
import com.issuetracker.domain.user.UserRepository;
import com.issuetracker.exception.IllegalUserAccessException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static com.issuetracker.auth.service.JwtService.USER_ID;

@Component
@RequiredArgsConstructor
public class JwtAuthInterceptor implements HandlerInterceptor {

    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";
    private final JwtService jwtService;
    private final UserRepository userRepository;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        if (loginRequired(handler)) {
            verifyJwt(request);
            verifyUser(request);
        }
        return true;
    }

    private void verifyUser(HttpServletRequest request) {
        Object userId = request.getAttribute(USER_ID);
        userRepository.findById((Long) userId).orElseThrow(IllegalUserAccessException::new);
    }

    private boolean loginRequired(Object handler) {
        return handler instanceof HandlerMethod
                && ((HandlerMethod) handler).hasMethodAnnotation(LoginRequired.class);
    }

    private void verifyJwt(HttpServletRequest request) {
        String header = request.getHeader(AUTHORIZATION);
        verifyHeader(header);

        String jwt = header.substring(BEARER.length()).trim();
        DecodedJWT decodedJWT = jwtService.verifyToken(jwt);

        request.setAttribute(USER_ID, jwtService.getUserId(decodedJWT));
    }

    private void verifyHeader(String header) {
        if (header == null || !header.startsWith(BEARER)) {
            throw new HttpHeaderFormatException();
        }
    }
}
