package com.codesquad.issuetracker.response;

public class MilestoneForIssueResponse {
    private Long id;
    private String title;

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
}
