package team02.issue_tracker.exception;

public class CommentNotFoundException extends NotFoundException {

    public CommentNotFoundException() {
        super("해당 코멘트가 존재하지 않습니다.");
    }
}
