package com.codesqaude.cocomarco.domain.issue.model.dto;

import com.codesqaude.cocomarco.domain.issue.model.IssueStatus;
import lombok.Getter;

import java.util.List;

@Getter
public class IssueSearchRequest {

    private IssueStatus status;
    private String createdBy;
    private String assignee;
    private String mentions;
    private List<Long> labels;
    private Long milestone;

    public IssueSearchRequest(String createdBy, IssueStatus status, String assignee, String mentions, List<Long> labels, Long milestone) {
        this.status = status;
        this.createdBy = createdBy;
        this.assignee = assignee;
        this.mentions = mentions;
        this.labels = labels;
        this.milestone = milestone;
        System.out.println(this.toString());
    }

    @Override
    public String toString() {
        return "IssueSearchRequest{" +
                "status=" + status +
                ", createdBy='" + createdBy + '\'' +
                ", assignee='" + assignee + '\'' +
                ", mentions='" + mentions + '\'' +
                ", labels=" + labels +
                ", milestone=" + milestone +
                '}';
    }
}
