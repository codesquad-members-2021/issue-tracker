package com.codesquad.issuetracker.domain.issue;

import com.codesquad.issuetracker.domain.issue.request.IssueRequest;
import com.codesquad.issuetracker.domain.user.User;
import com.codesquad.issuetracker.domain.assignee.Assignee;
import com.codesquad.issuetracker.domain.comment.Comment;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@Entity
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;

    @JsonProperty("status")
    private boolean isOpen;

    @JsonProperty("created_at")
    @DateTimeFormat(pattern = "yyyy-MM-dd kk:mm:ss")
    private LocalDateTime createdAt;

    @OneToOne
    private User user;

    @JsonProperty("milestone_id")
    private Long milestoneId;

    @OneToMany(mappedBy = "issue")
    private List<IssueLabel> issueLabels = new ArrayList<>();

    @OneToMany
    private List<Assignee> assignees = new ArrayList<>();

    @OneToMany
    private List<Comment> comments = new ArrayList<>();

    public Issue() {
    }

    public Issue(Long id, String title, String content, boolean isOpen, LocalDateTime createdAt, Long milestoneId, User user) {
        this(title, content, isOpen, createdAt, user, milestoneId);
        this.id = id;

    }

    public Issue(String title, String content, boolean isOpen, LocalDateTime createdAt, User user, Long milestoneId) {
        this.title = title;
        this.content = content;
        this.isOpen = isOpen;
        this.createdAt = createdAt;
        this.user = user;
        this.milestoneId = milestoneId;
    }

    public static Issue issueRequestToIssue(IssueRequest issueRequest) {
        return new Issue(issueRequest.getTitle(), issueRequest.getContent(), true,
                issueRequest.getCreatedAt(), issueRequest.getUser(), issueRequest.getMilestoneId());
    }

}
