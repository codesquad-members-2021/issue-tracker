package com.codesquad.issuetracker.jwt;

import com.codesquad.issuetracker.component.JwtProvider;
import com.codesquad.issuetracker.domain.User;
import com.codesquad.issuetracker.exception.TokenEmptyException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class BearerAuthInterceptor implements HandlerInterceptor {

    private final Logger logger = LoggerFactory.getLogger(BearerAuthInterceptor.class);

    private AuthorizationExtractor authorizationExtractor;
    private JwtProvider jwtProvider;

    public BearerAuthInterceptor(AuthorizationExtractor authorizationExtractor, JwtProvider jwtProvider) {
        this.authorizationExtractor = authorizationExtractor;
        this.jwtProvider = jwtProvider;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String jwtToken = authorizationExtractor.extract(request, "Bearer");
        if (jwtToken.isEmpty()) {
            throw new TokenEmptyException();
        }

        if (!jwtProvider.validateToken(jwtToken)) {
            throw new IllegalArgumentException("유효하지 않은 토큰입니다");
        }

        final User user = jwtProvider.getUser(jwtToken);

        logger.debug("User info from JWT : {}", user);

        request.setAttribute("user", user);
        return true;
    }
}
