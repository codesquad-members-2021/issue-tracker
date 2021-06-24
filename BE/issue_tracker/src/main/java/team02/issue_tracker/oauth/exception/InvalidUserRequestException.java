package team02.issue_tracker.oauth.exception;

public class InvalidUserRequestException extends RuntimeException {

    public InvalidUserRequestException() {
        super("유저정보 요청이 잘못되었습니다.");
    }

    public InvalidUserRequestException(String message) {
        super(message);
    }
}
