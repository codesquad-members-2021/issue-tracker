package com.codesqaude.cocomarco.common.auth;

import com.codesqaude.cocomarco.common.exception.NotLoggedInException;
import com.codesqaude.cocomarco.util.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMethod;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Objects;

import static com.codesqaude.cocomarco.util.JwtUtils.HEADER_TYPE;

@RequiredArgsConstructor
public class AuthInterceptor implements HandlerInterceptor {

    private final String jwtKey;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if (HttpMethod.OPTIONS.matches(request.getMethod())) {
            return true;
        }

        Auth auth = ((HandlerMethod) handler).getMethodAnnotation(Auth.class);
        if (Objects.isNull(auth)) {
            return true;
        }
        JwtUtils.parser(hetJwt(request), jwtKey);
        return true;
    }

    private String hetJwt(HttpServletRequest request) {
        String jwt = request.getHeader(HEADER_TYPE);
        if (Objects.isNull(jwt)) {
            throw new NotLoggedInException();
        }

        return jwt;
    }
}
