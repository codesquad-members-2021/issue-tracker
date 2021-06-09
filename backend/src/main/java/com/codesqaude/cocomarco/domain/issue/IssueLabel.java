package com.codesqaude.cocomarco.domain.issue;

import com.codesqaude.cocomarco.domain.label.Label;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class IssueLabel {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Issue issue;

    @ManyToOne
    private Label label;
}
