package com.codesqaude.cocomarco.domain.issue.model.dto;

import com.codesqaude.cocomarco.domain.issue.model.IssueStatus;
import lombok.Getter;

import java.util.List;

@Getter
public class IssueStatusRequest {

    private List<Long> issues;
    private IssueStatus status;

    public IssueStatusRequest(List<Long> issues, String status) {
        this.issues = issues;
        this.status = IssueStatus.valueOf(status.toUpperCase());
    }
}
