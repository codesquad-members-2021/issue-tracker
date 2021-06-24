package com.issuetracker.domain.issue;

import com.issuetracker.domain.BaseTimeEntity;
import com.issuetracker.domain.comment.Comment;
import com.issuetracker.domain.label.Label;
import com.issuetracker.domain.user.User;
import com.issuetracker.domain.milestone.Milestone;
import com.issuetracker.web.dto.reqeust.IssueTitleDTO;
import lombok.*;

import javax.persistence.*;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static javax.persistence.CascadeType.MERGE;
import static javax.persistence.CascadeType.PERSIST;
import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Issue extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn
    @ManyToOne(fetch = LAZY)
    private User author;

    @ManyToMany
    private List<User> assignees;

    @ManyToMany
    @JoinColumn(name = "label_id")
    private List<Label> labels;

    @JoinColumn
    @ManyToOne(fetch = LAZY)
    private Milestone milestone;

    private boolean isOpen;

    private String title;

    @OneToMany(cascade = {PERSIST, MERGE}, orphanRemoval = true)
    @JoinColumn(name = "issue_id", nullable = false)
    private List<Comment> comments;

    public static Issue create(String title, String comment, User author, List<Label> labels, List<User> assignees, Milestone milestone) {
        return Issue.builder()
                .author(author)
                .labels(labels)
                .assignees(assignees)
                .milestone(milestone)
                .isOpen(true)
                .title(title)
                .comments(Collections.singletonList(new Comment(comment, author)))
                .build();
    }

    public Issue update(IssueTitleDTO issueTitleDTO) {
        this.title = issueTitleDTO.getTitle();
        return this;
    }

    public void updateAssignees(List<User> assignees) {
        this.assignees = assignees;
    }

    public void updateLabels(List<Label> labels) {
        this.labels = labels;
    }

    public Issue deleteLabel(Label targetLabel) {
        this.labels = this.labels.stream()
                .filter(label -> !label.equals(targetLabel))
                .collect(Collectors.toList());
        return this;
    }

    public void updateMilestone(Milestone milestone) {
        this.milestone = milestone;
    }

    public Issue deleteMilestone() {
        this.milestone = null;
        return this;
    }

    public String getMilestoneTitle() {
        if (milestone == null) {
            return null;
        }
        return milestone.getTitle();
    }

    public Issue addComment(Comment comment) {
        comments.add(comment);
        return this;
    }

    public void deleteComment(Comment comment) {
        if (!comment.equals(this.comments.get(0))) {
            this.comments.remove(comment);
        }
    }

    public String getFirstComment() {
        return comments.get(0).getComment();
    }

    public Comment getLastComment() {
        return comments.get(comments.size() - 1);
    }

    public int getCommentNumber() {
        return comments.size();
    }

    public boolean isClosed() {
        return !isOpen;
    }
}
