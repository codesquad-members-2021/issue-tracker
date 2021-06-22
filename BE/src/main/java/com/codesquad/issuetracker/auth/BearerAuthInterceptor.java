package com.codesquad.issuetracker.auth;

import com.codesquad.issuetracker.domain.user.User;
import com.codesquad.issuetracker.auth.exception.TokenEmptyException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
@Slf4j
public class BearerAuthInterceptor implements HandlerInterceptor {

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

        log.debug("User info from JWT : {}", user);

        request.setAttribute("user", user);
        return true;
    }
}
