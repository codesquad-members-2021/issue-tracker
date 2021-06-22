package team02.issue_tracker.oauth.exception;

public class IncorrectTokenTypeException extends RuntimeException {

    public IncorrectTokenTypeException() {
        super("토큰타입 이상");
    }

    public IncorrectTokenTypeException(String message) {
        super(message);
    }

}
