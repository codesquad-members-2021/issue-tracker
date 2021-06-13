package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.domain.issue.model.dto.IssueRequest;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueStatusRequest;
import com.codesqaude.cocomarco.service.IssueModifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/issues")
@RequiredArgsConstructor
public class IssueModifyController {

    private final IssueModifyService issueModifyService;

    @PutMapping("/{issueId}/title")
    public void modifyTitle(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueModifyService.modifyTitle(issueId, issueRequest);
    }

    @PutMapping("/{issueId}/milestone")
    public void changeMilestone(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueModifyService.changeMilestone(issueId, issueRequest);
    }

    @PutMapping("/{issueId}/assignments")
    public void changeAssignments(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueModifyService.changeAssignments(issueId, issueRequest);
    }

    @PutMapping("/{issueId}/labels")
    public void changeLabels(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueModifyService.changeLabels(issueId, issueRequest);
    }

    @PutMapping("/status")
    public void changeStatus(@RequestBody IssueStatusRequest issueStatusRequest) {
        issueModifyService.changeStatus(issueStatusRequest);
    }
}
