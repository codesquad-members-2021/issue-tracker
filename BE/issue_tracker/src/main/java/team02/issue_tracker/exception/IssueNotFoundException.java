package team02.issue_tracker.exception;

public class IssueNotFoundException extends RuntimeException{

    public IssueNotFoundException() {
        super("issue not found!!!");
    }
}
