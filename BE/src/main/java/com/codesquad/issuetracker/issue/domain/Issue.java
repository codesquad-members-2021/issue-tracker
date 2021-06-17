package com.codesquad.issuetracker.issue.domain;

import com.codesquad.issuetracker.issue.dto.IssueRequest;
import com.codesquad.issuetracker.label.domain.Label;
import com.codesquad.issuetracker.milestone.domain.Milestone;
import com.codesquad.issuetracker.user.domain.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ISSUE_ID")
    private Long id;

    @ManyToOne
    @NonNull
    @JoinColumn(name = "USER_ID")
    private User author;

    @NonNull
    @Column(name = "ISSUE_IS_OPEN", nullable = false)
    private boolean open = true;

    @NonNull
    @Column(name = "ISSUE_TITLE", nullable = false)
    private String title;

    @Column(name = "ISSUE_CREATED_AT", nullable = false)
    private LocalDateTime createdAt;

    @ManyToMany
    private final Set<Label> labels = new LinkedHashSet<>();

    @ManyToMany
    private final Set<User> assignees = new LinkedHashSet<>();

    @ManyToOne
    @JoinColumn(name = "MILESTONE_ID", foreignKey =
    @ForeignKey(foreignKeyDefinition = "FOREIGN KEY (`MILESTONE_ID`) REFERENCES `milestone`(MILESTONE_ID) ON DELETE SET NULL"))
    private Milestone milestone;

    private Issue(User author, String title) {
        this.author = author;
        this.title = title;
        this.createdAt = LocalDateTime.now();
    }

    public void addLabel(Label label) {
        labels.add(label);
    }

    public void removeLabel(Label label) {
        labels.remove(label);
    }

    public void addAssignee(User user) {
        assignees.add(user);
    }

    public void removeAssignee(User user) {
        assignees.remove(user);
    }

    public void setMilestone(Milestone milestone) {
        this.milestone = milestone;

        if(this.open) {
            this.milestone.countOpenIssuesUp();
        }

        if(!this.open) {
            this.milestone.countClosedIssuesUp();
        }
    }

    public void removeMilestone() {
        if (this.milestone == null) {
            return;
        }

        if(this.open) {
            this.milestone.countOpenIssuesDown();
        }

        if(!this.open) {
            this.milestone.countClosedIssuesDown();
        }

        this.milestone = null;
    }

    public void updateIssue(IssueRequest issueRequest) {
        boolean isIssueOpenRequest = issueRequest.isOpen();

        if(this.open !=  isIssueOpenRequest && milestone != null) {
            if (isIssueOpenRequest) {
                this.milestone.openIssue();
            }

            if (!isIssueOpenRequest) {
                this.milestone.closeIssue();
            }
        }

        this.title = issueRequest.getTitle();
        this.open = isIssueOpenRequest;
    }

    public static Issue create(User author, String title) {
        return new Issue(author, title);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Issue issue = (Issue) o;
        return id.equals(issue.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
