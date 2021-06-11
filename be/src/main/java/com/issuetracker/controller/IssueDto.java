package com.issuetracker.controller;

import java.time.LocalDateTime;
import java.util.List;

import com.issuetracker.domain.Label;

public class IssueDto {
    private String title;
    private String authorAvatarUrl;
    private List<Label> labelList;
    private Integer issueNumber;
    private LocalDateTime createdTime;
    private String milestoneTitle;
}
