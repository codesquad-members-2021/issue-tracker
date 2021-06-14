package team02.issue_tracker.exception;

public class IllegalStatusException extends RuntimeException {

    public IllegalStatusException(String message) {
        super(message);
    }
}
