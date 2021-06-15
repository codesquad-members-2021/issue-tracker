package com.codesquad.issuetracker.response;

import com.codesquad.issuetracker.domain.Milestone;

public class MilestoneForIssueResponse {
    private Long id;
    private String title;

    public MilestoneForIssueResponse() {
    }

    public MilestoneForIssueResponse(Long id, String title) {
        this.id = id;
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public static MilestoneForIssueResponse milestoneToMilestoneForIssueResponse(Milestone milestone) {
        return new MilestoneForIssueResponse(milestone.getId(), milestone.getTitle());
    }
}
