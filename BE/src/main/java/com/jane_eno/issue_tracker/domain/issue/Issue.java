package com.jane_eno.issue_tracker.domain.issue;

import com.jane_eno.issue_tracker.domain.comment.Comment;
import com.jane_eno.issue_tracker.domain.label.Label;
import com.jane_eno.issue_tracker.domain.milestone.Milestone;
import com.jane_eno.issue_tracker.domain.user.User;
import com.jane_eno.issue_tracker.web.dto.reqeust.AssigneesToUpdateRequestDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@ToString
@AllArgsConstructor
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn
    @ManyToOne
    private User author;

    @ManyToMany
    private List<User> assignees;

    @ManyToMany
    private List<Label> labels;

    @JoinColumn
    @ManyToOne
    private Milestone milestone;

    private boolean isOpen;

    private String title;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    @JoinColumn(name = "issue_id", nullable = false)
    private List<Comment> comments;

    private LocalDateTime createdDateTime;

    public Issue create(User author, List<Label> labels, List<User> assignees, Milestone milestone) {
        this.author = author;
        this.labels = labels;
        this.assignees = assignees;
        this.milestone = milestone;
        this.isOpen = true;
        this.createdDateTime = LocalDateTime.now();
        return this;
    }

    public Issue update(String title) {
        this.title = title;
        return this;
    }

    public Issue deleteComment(Comment comment) {
        if (!comment.equals(this.comments.get(0))) {
            this.comments.remove(comment);
        }
        return this;
    }

    public Issue updateMilestone(Milestone milestone) {
        this.milestone = milestone;
        return this;
    }

    public Issue updateAssignees(List<User> assignees) {
        this.assignees = assignees;
        return this;
    }

    public Issue updateLabels(List<Label> labels) {
        this.labels = labels;
        return this;
    }

    public String getFirstComment() {
        return comments.get(0).getComment();
    }

    public int getCommentNumber() {
        return comments.size();
    }

    public Issue addComment(Comment comment) {
        comments.add(comment);
        return this;
    }

    public String getMilestoneTitle() {
        return milestone.getTitle();
    }

    public boolean checkAssignees(User user) {
        long count = assignees.stream()
                .filter(assignee -> assignee.matchUser(user))
                .count();
        return count > 0;
    }

    public boolean checkLabels(Label targetLabel) {
        long count = labels.stream()
                .filter(label -> label.matchLabel(targetLabel))
                .count();
        return count > 0;
    }
}
