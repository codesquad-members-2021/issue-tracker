package com.codesqaude.cocomarco.domain.label;

import com.codesqaude.cocomarco.domain.issue.IssueLabel;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "label")
    private List<IssueLabel> issueLabels = new ArrayList<>();

    private String name;
    private String hexCode;

}
