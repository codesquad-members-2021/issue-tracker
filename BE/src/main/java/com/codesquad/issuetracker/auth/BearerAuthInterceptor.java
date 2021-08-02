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

    private final String TOKEN_TYPE = "Bearer";
    private final String USER = "user";

    private AuthorizationExtractor authorizationExtractor;
    private JwtProvider jwtProvider;

    public BearerAuthInterceptor(AuthorizationExtractor authorizationExtractor, JwtProvider jwtProvider) {
        this.authorizationExtractor = authorizationExtractor;
        this.jwtProvider = jwtProvider;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        request.setAttribute(USER, getUserFromJWT(request));
        return true;
    }

    private String validateAndReturnJWT(HttpServletRequest request) {
        String jwtToken = authorizationExtractor
                .extract(request, TOKEN_TYPE)
                .orElseThrow(TokenEmptyException::new);

        if (!jwtProvider.validateToken(jwtToken)) {
            throw new IllegalArgumentException("유효하지 않은 토큰입니다");
        }
        return jwtToken;
    }

    private User getUserFromJWT(HttpServletRequest request) {
        final String jwtToken = validateAndReturnJWT(request);
        final User user = jwtProvider.getUser(jwtToken);

        log.debug("User info from JWT : {}", user);

        return user;
    }

}
