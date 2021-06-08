package team02.issue_tracker.domain.composite_key;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class CommentEmojiId implements Serializable {
    private Long comment;
    private Long emoji;
}
