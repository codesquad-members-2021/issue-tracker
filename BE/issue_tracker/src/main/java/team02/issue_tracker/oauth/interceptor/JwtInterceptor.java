package team02.issue_tracker.oauth.interceptor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import team02.issue_tracker.oauth.annotation.LoginRequired;
import team02.issue_tracker.oauth.jwt.JwtDecoder;
import team02.issue_tracker.oauth.jwt.JwtFinder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@Component
public class JwtInterceptor implements HandlerInterceptor {

    private final JwtFinder jwtFinder;
    private final JwtDecoder jwtDecoder;

    public JwtInterceptor(JwtFinder jwtFinder, JwtDecoder jwtDecoder) {
        this.jwtFinder = jwtFinder;
        this.jwtDecoder = jwtDecoder;
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
        String authorizationInHeader = request.getHeader("Authorization");
        String jwt = jwtFinder.extractJwtFromHeader(authorizationInHeader);
        Long userId = jwtDecoder.decodeJwtToUserId(jwt);
        request.setAttribute("user_id", userId);
    }
}
