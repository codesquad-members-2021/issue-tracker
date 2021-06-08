package team02.issue_tracker.domain;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Comment {
    @Id @GeneratedValue
    private Long id;

    private String content;
    private String file;
    private LocalDateTime createdTime;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_comment_issue"))
    private Issue issue;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_comment_user1"))
    private User writer;

    @OneToMany(mappedBy = "comment")
    private List<CommentEmoji> commentEmojis = new ArrayList<>();
}
