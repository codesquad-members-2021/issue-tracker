package team02.issue_tracker.oauth.exception;

public class InvalidGithubUserRequestException extends RuntimeException {

    public InvalidGithubUserRequestException() {
        super("GitHub 유저정보 요청이 잘못되었습니다.");
    }

    public InvalidGithubUserRequestException(String message) {
        super(message);
    }
}
