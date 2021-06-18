package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.common.auth.Auth;
import com.codesqaude.cocomarco.common.auth.UserId;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueRequest;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueStatusRequest;
import com.codesqaude.cocomarco.service.IssueModifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/issues")
@RequiredArgsConstructor
public class IssueModifyController {

    private final IssueModifyService issueModifyService;

    @Auth
    @PutMapping("/{issueId}/title")
    public void modifyTitle(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest, @UserId UUID userId) {
        issueModifyService.modifyTitle(issueId, userId, issueRequest);
    }

    @Auth
    @PutMapping("/{issueId}/milestone")
    public void changeMilestone(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueModifyService.changeMilestone(issueId, issueRequest);
    }

    @Auth
    @PutMapping("/{issueId}/assignments")
    public void changeAssignments(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueModifyService.changeAssignments(issueId, issueRequest);
    }

    @Auth
    @PutMapping("/{issueId}/labels")
    public void changeLabels(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueModifyService.changeLabels(issueId, issueRequest);
    }
    
    @Auth
    @PutMapping("/status")
    public void changeStatus(@RequestBody IssueStatusRequest issueStatusRequest) {
        issueModifyService.changeStatus(issueStatusRequest);
    }
}
