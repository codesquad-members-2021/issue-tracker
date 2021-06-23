package team02.issue_tracker.oauth.exception;

public class InvalidAccessTokenRequestException extends RuntimeException{

    public InvalidAccessTokenRequestException() {
        super("엑세스 토큰 요청이 올바르지 않습니다.");
    }

    public InvalidAccessTokenRequestException(String message) {
        super(message);
    }

}
