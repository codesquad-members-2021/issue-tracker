package com.issuetracker.controller;

import com.issuetracker.dto.*;
import com.issuetracker.oauth.User;
import com.issuetracker.service.IssueService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    private final IssueService issueService;

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @GetMapping
    public List<IssueDto> viewAllIssues(IssueSearchCondition searchCondition) {
        return issueService.searchIssuesByConditions(searchCondition);
    }

    @PatchMapping("/{id}")
    public ResponseStatusDto edit(@PathVariable Long id, @RequestBody IssueRequestDto issue) {
        return issueService.editIssueByIssueId(id, issue);
    }

    @PostMapping
    public ResponseStatusDto create(@RequestBody IssueRequestDto issue, @RequestAttribute User user){
        return issueService.saveIssue(issue, user);
    }

    @GetMapping("/{id}")
    public IssueDetailDto viewIssueDetail(@PathVariable Long id) {
        return issueService.searchIssueDetailByIssueId(id);
    }

    @GetMapping("/count")
    public IssueCountDto viewNumberOfIssuesClosedAndOpened() {
        return issueService.searchNumberOfIssuesClosedAndOpened();
    }
}
