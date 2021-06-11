package com.codesqaude.cocomarco.domain.label;

import com.codesqaude.cocomarco.common.BasicEntity;
import com.codesqaude.cocomarco.domain.issue.model.IssueLabel;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Label extends BasicEntity {

    @OneToMany(mappedBy = "label")
    private List<IssueLabel> issueLabels = new ArrayList<>();

    private String title;
    private String detail;
    private String hexCode;

}
