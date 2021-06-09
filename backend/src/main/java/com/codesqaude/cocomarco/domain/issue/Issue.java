package com.codesqaude.cocomarco.domain.issue;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Issue {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String text;
    private LocalDateTime writingTime;
    private IssueStatus status;

    @OneToMany
    private List<Comment> comments = new ArrayList<>();

    @OneToMany
    private List<Assignment> assignments = new ArrayList<>();

    @OneToMany
    private List<IssueLabel> issueLabels = new ArrayList<>();
}
