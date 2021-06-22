package team02.issue_tracker.oauth.exception;

public class JwtNotFoundException extends RuntimeException {
    public JwtNotFoundException() {
        super("JWT를 찾을 수 없습니다.");
    }

}
