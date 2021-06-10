package team02.issue_tracker.exception;

public class IssueNotFoundException extends NotFoundException{

    public IssueNotFoundException() {
        super("해당 이슈가 존재하지 않습니다.");
    }
}
