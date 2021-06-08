package team02.issue_tracker.domain;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Issue {
    @Id @GeneratedValue
    private Long id;

    private int issueNumber;
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
    private MileStone mileStone;

    @OneToMany(mappedBy = "issue")
    private List<IssueAssignee> issueAssignees = new ArrayList<>();

    @OneToMany(mappedBy = "issue")
    private List<Comment> comments = new ArrayList<>();
}
