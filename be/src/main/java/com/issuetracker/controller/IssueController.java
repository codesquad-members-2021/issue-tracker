package com.issuetracker.controller;

import com.issuetracker.domain.Issue;
import com.issuetracker.dto.IssueDto;
import com.issuetracker.dto.IssueRequestDto;
import com.issuetracker.dto.IssueSearchCondition;
import com.issuetracker.dto.ResponseStatusDto;
import com.issuetracker.oauth.User;
import com.issuetracker.service.IssueService;
import org.springframework.http.ResponseEntity;
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
//        return issueService.getAllIssues();
        return issueService.searchIssuesByConditions(searchCondition);
    }


    @PostMapping
    public ResponseStatusDto create(@RequestBody IssueRequestDto issue, @RequestAttribute User user){
        return issueService.saveIssue(issue, user);
    }
}
