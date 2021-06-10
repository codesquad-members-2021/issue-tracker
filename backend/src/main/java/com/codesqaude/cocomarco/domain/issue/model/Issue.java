package com.codesqaude.cocomarco.domain.issue.model;

import com.codesqaude.cocomarco.common.BasicEntity;
import com.codesqaude.cocomarco.domain.comment.Comment;
import com.codesqaude.cocomarco.domain.milestone.Milestone;
import com.codesqaude.cocomarco.domain.user.User;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Issue extends BasicEntity {

    private String title;
    private String text;
    private LocalDateTime writingTime;

    @Enumerated(EnumType.STRING)
    private IssueStatus status;

    @OneToMany(mappedBy = "issue")
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "issue")
    private List<Assignment> assignments = new ArrayList<>();

    @OneToMany(mappedBy = "label")
    private List<IssueLabel> issueLabels = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "milestone_id")
    private Milestone milestone;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "writer")
    private User writer;

    public static Issue createIssue(User writer, String title, String text, @Nullable List<Assignment> assignments, @Nullable List<IssueLabel> issueLabels, @Nullable Milestone milestone) {
        return new Issue(title, text, LocalDateTime.now(), IssueStatus.OPEN, null, assignments, issueLabels, milestone, writer);
    }

    @Override
    public String toString() {
        return "Issue{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", text='" + text + '\'' +
                ", writingTime=" + writingTime +
                ", status=" + status +
                '}';
    }
}
