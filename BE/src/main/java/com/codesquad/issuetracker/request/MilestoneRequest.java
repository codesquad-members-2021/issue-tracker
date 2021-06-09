package com.codesquad.issuetracker.request;

import java.time.LocalDate;

public class MilestoneRequest {
    private String title;
    private String content;
    private LocalDate dueDate;

    public MilestoneRequest(String title, String content, LocalDate dueDate) {
        this.title = title;
        this.content = content;
        this.dueDate = dueDate;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

}
