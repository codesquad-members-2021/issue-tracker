package team02.issue_tracker.exception;

public class UserNotFoundException extends NotFoundException{

    public UserNotFoundException() {
        super("해당 유저가 존재하지 않습니다.");
    }
}
