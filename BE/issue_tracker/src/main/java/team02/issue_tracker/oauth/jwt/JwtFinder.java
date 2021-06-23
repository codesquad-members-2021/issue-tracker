package team02.issue_tracker.oauth.jwt;

import org.springframework.stereotype.Component;
import team02.issue_tracker.oauth.exception.InvalidTokenTypeException;
import team02.issue_tracker.oauth.exception.JwtNotFoundException;

/**
 *  Header의 Authorization에서 JWT를 추출합니다.
 */
@Component
public class JwtFinder {

    private final int JWT_INDEX = 1;
    private final String JWT_PREFIX = "Bearer";

    public String extractJwtFromHeader(String authorizationInHeader) {
        verify(authorizationInHeader);
        String[] tokenTypeAndJwt = authorizationInHeader.split(" ");
        return tokenTypeAndJwt[JWT_INDEX];
    }

    private void verify(String authorizationInHeader) {
        if (authorizationInHeader == null || authorizationInHeader.isEmpty()) {
            throw new JwtNotFoundException();
        }
        if (!authorizationInHeader.startsWith(JWT_PREFIX)) {
            throw new InvalidTokenTypeException();
        }
    }
}
