package com.jane_eno.issue_tracker.domain.issue;

import com.jane_eno.issue_tracker.domain.comment.Comment;
import com.jane_eno.issue_tracker.domain.label.Label;
import com.jane_eno.issue_tracker.domain.milestone.Milestone;
import com.jane_eno.issue_tracker.domain.user.User;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @ManyToOne
//    private User author;
//
//    @ManyToMany
//    private List<User> assignees;
//
//    @ManyToMany
//    private List<Label> labels;

//    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_issue_milestone"))
    @ManyToOne
    private Milestone milestone;
//    (foreignKey = @ForeignKey(name = "fk_issue_milestone"))

    private boolean isOpen;

    private String title;

    @OneToMany(mappedBy = "issue")
    private final List<Comment> comments = new ArrayList<>();

    private LocalDateTime createdDateTime;
}
