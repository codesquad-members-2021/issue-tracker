package team02.issue_tracker.exception;

public class EmojiNotFoundException extends NotFoundException{

    public EmojiNotFoundException() {
        super("해당 이모지가 존재하지 않습니다.");
    }
}
