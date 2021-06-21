package team02.issue_tracker.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE comment SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;
    private String file;
    private LocalDateTime createdTime;
    private boolean isDeleted;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_comment_issue"))
    private Issue issue;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_comment_user1"))
    private User writer;

    @OneToMany(mappedBy = "comment", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<CommentEmoji> commentEmojis = new ArrayList<>();

    public Comment(String content, String file, User writer) {
        this.content = content;
        this.file = file;
        this.writer = writer;
        this.createdTime = LocalDateTime.now();
    }

    public void addIssue(Issue issue) {
        this.issue = issue;
    }

    public void edit(String content, String file) {
        this.content = content;
        this.file = file;
    }
}
