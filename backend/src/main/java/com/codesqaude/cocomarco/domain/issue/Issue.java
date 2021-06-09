package com.codesqaude.cocomarco.domain.issue;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;
    private String text;
    private LocalDateTime writingTime;

    @Enumerated(EnumType.STRING)
    private IssueStatus status;

    @OneToMany
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "issue")
    private List<Assignment> assignments = new ArrayList<>();

    @OneToMany(mappedBy = "label")
    private List<IssueLabel> issueLabels = new ArrayList<>();
}
