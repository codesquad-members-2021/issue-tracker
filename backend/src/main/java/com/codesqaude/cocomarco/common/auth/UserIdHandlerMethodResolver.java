package com.codesqaude.cocomarco.common.auth;

import com.codesqaude.cocomarco.util.JwtUtils;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import java.util.UUID;

public class UserIdHandlerMethodResolver implements HandlerMethodArgumentResolver {

    private static final String HEADER_TYPE = "Authorization";
    private static final String key = "q1w2e3r4";

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        UserId userId = parameter.getParameterAnnotation(UserId.class);
        return userId != null;
    }

    @Override
    public UUID resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        String jwt = webRequest.getHeader(HEADER_TYPE);

        Object infoFromJwt = JwtUtils.getId(jwt,key);
        return UUID.fromString(String.valueOf(infoFromJwt));
    }
}
