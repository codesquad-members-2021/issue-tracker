package com.codesqaude.cocomarco.domain.label;

import com.codesqaude.cocomarco.domain.issue.IssueLabel;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Label {

    @Id
    @GeneratedValue
    private Long id;

    @OneToMany
    private List<IssueLabel> issueLabels = new ArrayList<>();

    private String name;
    private String hexCode;

}
