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
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToMany(mappedBy = "issue")
    private List<IssueLabel> issueLabels = new ArrayList<>();

    private LocalDateTime createdTime;
    private boolean isOpen;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_issue_user1"))
    private User writer;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_issue_milestone1"))
    private Milestone milestone;

    @OneToMany(mappedBy = "issue")
    private List<IssueAssignee> issueAssignees = new ArrayList<>();

    @OneToMany(mappedBy = "issue")
    private List<Comment> comments = new ArrayList<>();

    public Issue(String title, User writer, boolean isOpen) {
        this.title = title;
        this.writer = writer;
        this.isOpen = isOpen;
        createdTime = LocalDateTime.now();
    }

    public void addMilestone(Milestone milestone) {
        this.milestone = milestone;
    }
}
