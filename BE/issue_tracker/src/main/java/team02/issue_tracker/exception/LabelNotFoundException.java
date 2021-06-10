package team02.issue_tracker.exception;

public class LabelNotFoundException extends NotFoundException{

    public LabelNotFoundException() {
        super("해당 라벨이 존재하지 않습니다.");
    }
}
