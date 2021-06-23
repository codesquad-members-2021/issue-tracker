package com.team11.issue.domain;

import com.team11.issue.dto.issue.IssueRequestDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "issue")
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "tinyint(1) default 1")
    private boolean isOpen;

    private String title;

    private String contents;

    @Column(columnDefinition = "tinyint(1) default 0")
    private boolean isDelete;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "milestone_id")
    private Milestone milestone;

    @OneToMany(mappedBy = "issue")
    private List<Assignees> assignees = new ArrayList<>();

    @OneToMany(mappedBy = "issue")
    private List<IssueHasLabel> issueHasLabels = new ArrayList<>();

    public static Issue createIssue(User user, IssueRequestDTO issueRequestDTO, Milestone milestone) {
        return Issue.builder()
                .isOpen(true)
                .title(issueRequestDTO.getTitle())
                .contents(issueRequestDTO.getContents())
                .user(user)
                .milestone(milestone)
                .build();
    }

    public Issue updateStatus(String status) {
        if (status.equals("open")) {
            this.isOpen = true;
        }

        if (status.equals("closed")) {
            this.isOpen = false;
        }
        return this;
    }

    public void updateIssue(IssueRequestDTO issueRequestDTO, Milestone milestone) {
        this.title = issueRequestDTO.getTitle();
        this.contents = issueRequestDTO.getContents();
        this.milestone = milestone;
    }

    public void deleteIssue() {
        this.isDelete = true;
    }
}
