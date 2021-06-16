package com.codesqaude.cocomarco.common.auth;

import com.codesqaude.cocomarco.common.exception.NotLoggedInException;
import com.codesqaude.cocomarco.util.JwtUtils;
import org.springframework.http.HttpMethod;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Objects;

public class AuthInterceptor implements HandlerInterceptor {

    private static final String key = "q1w2e3r4";
    private static final String HEADER_TYPE = "Authorization";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if(HttpMethod.OPTIONS.matches(request.getMethod())){
            return true;
        }

        Auth auth = ((HandlerMethod) handler).getMethodAnnotation(Auth.class);
        if (Objects.isNull(auth)) {
            return false;
        }
        JwtUtils.validateJwt(hetJwt(request), key);
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
