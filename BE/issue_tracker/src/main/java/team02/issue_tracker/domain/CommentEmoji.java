package team02.issue_tracker.domain;

import javax.persistence.*;

@Entity
public class CommentEmoji {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_comment_emoji_comment1"))
    private Comment comment;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_comment_emoji_emoji1"))
    private Emoji emoji;
}
