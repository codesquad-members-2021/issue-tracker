package team02.issue_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team02.issue_tracker.domain.Emoji;

@AllArgsConstructor
@Getter
public class EmojiResponse {

    private Long id;
    private String name;

    public EmojiResponse(Emoji emoji) {
        this(emoji.getId(), emoji.getName());
    }
}
