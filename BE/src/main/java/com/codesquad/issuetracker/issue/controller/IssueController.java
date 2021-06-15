package com.codesquad.issuetracker.issue.controller;

import com.codesquad.issuetracker.issue.dto.IssueCreateRequest;
import com.codesquad.issuetracker.issue.dto.IssueWrapper;
import com.codesquad.issuetracker.issue.service.IssueService;
import com.codesquad.issuetracker.user.domain.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    private final IssueService issueService;

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @PostMapping
    public IssueWrapper createIssue(@RequestBody IssueCreateRequest issueCreateRequest, @RequestAttribute User author) {
        return issueService.createIssue(issueCreateRequest, author);
    }
}
