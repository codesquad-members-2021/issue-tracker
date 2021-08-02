package com.codesquad.issuetracker.auth;

import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.Optional;

@Component
public class AuthorizationExtractor {
    public static final String AUTHORIZATION = "Authorization";

    // HTTP 요청으로부터 JWT토큰을 추출함
    public Optional<String> extract(HttpServletRequest request, String type) {
        Enumeration<String> headers = request.getHeaders(AUTHORIZATION);
        while (headers.hasMoreElements()) {
            String value = headers.nextElement();
            String valueType = value.split(" ")[0];

            if (valueType.equals(type)) {
                return Optional.of(value.substring(type.length()).trim());
            }
        }
        return Optional.empty();
    }
}
