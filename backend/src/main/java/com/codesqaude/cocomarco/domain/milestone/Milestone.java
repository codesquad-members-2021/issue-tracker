package com.codesqaude.cocomarco.domain.milestone;

import com.codesqaude.cocomarco.common.BasicEntity;
import com.codesqaude.cocomarco.domain.issue.model.Issue;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Milestone extends BasicEntity {

    private String title;
    private String detail;
    private LocalDate deadLine;

    @OneToMany(mappedBy = "milestone")
    private List<Issue> issues = new ArrayList<>();
}
