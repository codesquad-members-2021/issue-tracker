package com.codesqaude.cocomarco.domain.issue.model;

import com.codesqaude.cocomarco.common.BasicEntity;
import com.codesqaude.cocomarco.domain.label.Label;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class IssueLabel extends BasicEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "label_id")
    private Label label;
}
