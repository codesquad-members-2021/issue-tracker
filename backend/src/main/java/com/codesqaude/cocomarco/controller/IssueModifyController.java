package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.domain.issue.model.dto.IssueTitleRequest;
import com.codesqaude.cocomarco.service.IssueModifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/issues/{issueId}")
@RequiredArgsConstructor
public class IssueModifyController {

    private final IssueModifyService issueModifyService;

    @PutMapping("/title")
    public void modifyTitle(@PathVariable Long issueId, @RequestBody IssueTitleRequest issueTitleRequest) {
        issueModifyService.modifyTitle(issueId, issueTitleRequest);
    }
}
