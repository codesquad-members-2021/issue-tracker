package team02.issue_tracker.oauth.exception;

public class InvalidGithubAccessTokenRequestException extends RuntimeException{

    public InvalidGithubAccessTokenRequestException() {
        super("깃헙 엑세스 토큰 요청이 올바르지 않습니다.");
    }

    public InvalidGithubAccessTokenRequestException(String message) {
        super(message);
    }

}
