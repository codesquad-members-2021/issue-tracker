package team02.issue_tracker.exception;

public class MilestoneNotFoundException extends NotFoundException{

    public MilestoneNotFoundException() {
        super("해당 마일스톤이 존재하지 않습니다.");
    }
}
