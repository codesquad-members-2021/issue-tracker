package team02.issue_tracker.exception;

public class IllegalIssueStatusException extends RuntimeException {

    public IllegalIssueStatusException(String message) {
        super(message);
    }
}
