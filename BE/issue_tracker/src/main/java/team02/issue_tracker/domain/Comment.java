package team02.issue_tracker.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;
    private String file;
    private LocalDateTime createdTime;
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_comment_issue"))
    private Issue issue;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_comment_user1"))
    private User writer;

    @OneToMany(mappedBy = "comment")
    private List<CommentEmoji> commentEmojis = new ArrayList<>();

    public Comment(String content, String file, User writer) {
        this.content = content;
        this.file = file;
        this.writer = writer;
        this.createdTime = LocalDateTime.now();
        this.isDeleted = false;
    }

    public void addIssue(Issue issue) {
        this.issue = issue;
    }
}
