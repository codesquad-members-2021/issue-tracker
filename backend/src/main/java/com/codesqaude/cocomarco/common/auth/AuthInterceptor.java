package com.codesqaude.cocomarco.common.auth;

import com.codesqaude.cocomarco.common.exception.auth.NotLoggedInException;
import com.codesqaude.cocomarco.util.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Objects;

import static com.codesqaude.cocomarco.util.JwtUtils.HEADER_TYPE;

@Component
@RequiredArgsConstructor
public class AuthInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if (HttpMethod.OPTIONS.matches(request.getMethod())) {
            return true;
        }

        Auth auth = ((HandlerMethod) handler).getMethodAnnotation(Auth.class);
        if (Objects.isNull(auth)) {
            return true;
        }
        JwtUtils.parser(getAuthorization(request));
        return true;
    }

    private String getAuthorization(HttpServletRequest request) {
        String authorization = request.getHeader(HEADER_TYPE);
        if (Objects.isNull(authorization)) {
            throw new NotLoggedInException();
        }

        return authorization;
    }
}
