package com.issuetracker.controller;

import com.issuetracker.dto.IssueDto;
import com.issuetracker.oauth.User;
import com.issuetracker.service.IssueService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class IssueController {

    private final IssueService issueService;

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @GetMapping("/issues")
    public List<IssueDto> viewAllIssues(@RequestAttribute User user) {
        return issueService.getAllIssues(user);
    }
}
