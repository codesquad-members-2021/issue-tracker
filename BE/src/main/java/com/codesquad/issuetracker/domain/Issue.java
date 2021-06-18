package com.codesquad.issuetracker.domain;

import com.codesquad.issuetracker.request.IssueRequest;
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
    private boolean status;

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
    // @JoinColumn(name = "issue_id")
    private List<Assignee> assignees = new ArrayList<>();

    @OneToMany
    private List<Comment> comments = new ArrayList<>();

    public Issue() {
    }

    public Issue(Long id, String title, String content, boolean status, LocalDateTime createdAt, Long milestoneId, User user) {
        this(title, content, status, createdAt, milestoneId, user);
        this.id = id;

    }

    public Issue(String title, String content, boolean status, LocalDateTime createdAt, Long milestoneId, User user) {
        this.title = title;
        this.content = content;
        this.status = status;
        this.createdAt = createdAt;
        this.milestoneId = milestoneId;
        this.user = user;
    }

    public static Issue issueRequestToIssue(IssueRequest issueRequest) {
        return new Issue(issueRequest.getTitle(), issueRequest.getContent(), true, issueRequest.getCreatedAt(),
                issueRequest.getMilestoneId(), issueRequest.getUser());
    }

}
