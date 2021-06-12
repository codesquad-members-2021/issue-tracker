package team02.issue_tracker.oauth;

import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import team02.issue_tracker.oauth.annotation.LoginRequired;
import team02.issue_tracker.oauth.exception.IncorrectTokenTypeException;
import team02.issue_tracker.oauth.exception.JwtNotFoundException;
import team02.issue_tracker.oauth.utils.JwtUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@Component
public class JwtInterceptor implements HandlerInterceptor {

    private final int JWT = 1;

    private final JwtUtils jwtUtils;

    public JwtInterceptor(JwtUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (needLogin(handler)) {
            setUserIdOn(request);
        }
        return true;
    }

    private boolean needLogin(Object handler) {
        return handler instanceof HandlerMethod
                && ((HandlerMethod) handler).hasMethodAnnotation(LoginRequired.class);
    }

    private void setUserIdOn(HttpServletRequest request) {
        String jwt = extractJwtFromHeader(request);
        Long userId = decodeJwtToUserId(jwt);
        request.setAttribute("user_id", userId);
    }

    private String extractJwtFromHeader(HttpServletRequest request) {
        String authorizationInHeader = request.getHeader("Authorization");
        verify(authorizationInHeader);
        String[] tokenTypeAndJwt = authorizationInHeader.split(" ");
        return tokenTypeAndJwt[JWT];
    }

    private void verify(String authorizationInHeader) {
        if (authorizationInHeader == null || authorizationInHeader.isEmpty()) {
            throw new JwtNotFoundException();
        }
        if (!authorizationInHeader.startsWith("Bearer")) {
            throw new IncorrectTokenTypeException();
        }
    }

    private Long decodeJwtToUserId(String jwt) {
        DecodedJWT decodedJwt = jwtUtils.decode(jwt);
        return decodedJwt.getClaim("user_id").asLong();
    }
}
