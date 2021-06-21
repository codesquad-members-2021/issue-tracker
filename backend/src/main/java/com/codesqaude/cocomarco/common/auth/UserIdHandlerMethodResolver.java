package com.codesqaude.cocomarco.common.auth;

import com.codesqaude.cocomarco.util.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import java.util.UUID;

import static com.codesqaude.cocomarco.util.JwtUtils.HEADER_TYPE;

@RequiredArgsConstructor
public class UserIdHandlerMethodResolver implements HandlerMethodArgumentResolver {

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        UserId userId = parameter.getParameterAnnotation(UserId.class);
        return userId != null;
    }

    @Override
    public UUID resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        String jwt = webRequest.getHeader(HEADER_TYPE);

        Object infoFromJwt = JwtUtils.getId(jwt);
        return UUID.fromString(String.valueOf(infoFromJwt));
    }
}
