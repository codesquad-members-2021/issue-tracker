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
    public void modifyMilestone(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueModifyService.modifyMilestone(issueId, issueRequest);
    }

    @PutMapping("/status")
    public void changeStatus(@RequestBody IssueStatusRequest issueStatusRequest) {
        issueModifyService.changeStatus(issueStatusRequest);
    }
}
