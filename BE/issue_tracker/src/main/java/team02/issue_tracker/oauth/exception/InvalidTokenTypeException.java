package team02.issue_tracker.oauth.exception;

public class InvalidTokenTypeException extends RuntimeException {

    public InvalidTokenTypeException() {
        super("토큰타입 이상");
    }

    public InvalidTokenTypeException(String message) {
        super(message);
    }

}
