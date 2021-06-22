package team02.issue_tracker.dto;

import lombok.Getter;
import team02.issue_tracker.domain.Emoji;

@Getter
public class EmojiResponse {

    private Long id;
    private String name;

    public EmojiResponse(Emoji emoji) {
        this.id = emoji.getId();
        this.name = emoji.getName();
    }
}
