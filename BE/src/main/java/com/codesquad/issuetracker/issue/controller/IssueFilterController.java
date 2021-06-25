package com.codesquad.issuetracker.issue.controller;

import com.codesquad.issuetracker.issue.dto.IssueFilter;
import com.codesquad.issuetracker.issue.dto.IssuesWrapper;
import com.codesquad.issuetracker.issue.service.IssueFilterService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/issues")
public class IssueFilterController {

    private final IssueFilterService issueFilterService;

    public IssueFilterController(IssueFilterService issueFilterService) {
        this.issueFilterService = issueFilterService;
    }

    @GetMapping
    public IssuesWrapper filterIssues(IssueFilter issueFilter) {
        return issueFilterService.filterIssues(issueFilter);
    }
}
