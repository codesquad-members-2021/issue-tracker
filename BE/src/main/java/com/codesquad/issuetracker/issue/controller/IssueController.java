package com.codesquad.issuetracker.issue.controller;

import com.codesquad.issuetracker.issue.dto.*;
import com.codesquad.issuetracker.issue.service.IssueService;
import com.codesquad.issuetracker.user.domain.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    private final IssueService issueService;

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @GetMapping("/{id}")
    public IssueWrapper readIssue(@PathVariable Long id) {
        return issueService.readIssueById(id);
    }

    @GetMapping
    public IssuesWrapper readAllIssues() {
        return issueService.readAllIssues();
    }

    @PostMapping
    public IssueWrapper createIssue(@RequestBody IssueCreateRequest issueCreateRequest, @RequestAttribute User author) {
        return issueService.createIssue(issueCreateRequest, author);
    }

    @PutMapping("/{id}")
    public IssueWrapper updateIssue(@RequestBody IssueRequest issueRequest, @PathVariable Long id) {
        return issueService.updateIssue(issueRequest, id);
    }

    @PostMapping("/{id}/labels")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void addLabel(@PathVariable Long id, @RequestBody LabelIdRequest labelIdRequest) {
        issueService.addLabel(id, labelIdRequest);
    }

    @DeleteMapping("/{id}/labels/{labelId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeLabel(@PathVariable Long id, @PathVariable UUID labelId) {
        issueService.removeLabel(id, labelId);
    }

    @PostMapping("/{id}/assignees")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void addAssignee(@PathVariable Long id, @RequestBody AssigneeIdRequest assigneeIdRequest) {
        issueService.addAssignee(id, assigneeIdRequest);
    }

    @DeleteMapping("/{id}/assignees/{assigneeId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeAssignee(@PathVariable Long id, @PathVariable UUID assigneeId) {
        issueService.removeAssignee(id, assigneeId);
    }

    @PostMapping("/{id}/milestone")
    public void setMilestone(@PathVariable Long id, @RequestBody MilestoneIdRequest milestoneIdRequest) {
        issueService.setMilestone(id, milestoneIdRequest);
    }

    @DeleteMapping("/{id}/milestone")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeMilestone(@PathVariable Long id) {
        issueService.removeMilestone(id);
    }
}
