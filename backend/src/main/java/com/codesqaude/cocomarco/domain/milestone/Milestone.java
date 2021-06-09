package com.codesqaude.cocomarco.domain.milestone;

import com.codesqaude.cocomarco.domain.issue.Issue;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Milestone {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;
    private String detail;
    private LocalDate deadLine;

    @OneToMany
    private List<Issue> issues = new ArrayList<>();
}
