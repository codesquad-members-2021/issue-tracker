package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.common.auth.Auth;
import com.codesqaude.cocomarco.common.auth.UserId;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueDetailResponse;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueListResponseWrapper;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueRequest;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueSearchRequest;
import com.codesqaude.cocomarco.service.IssueService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/issues")
@RequiredArgsConstructor
public class IssueController {

    private final IssueService issueService;

    @Auth
    @PostMapping
    public void create(@RequestBody IssueRequest issueRequest, @UserId UUID userId) {
        issueService.create(issueRequest, userId);
    }

    @GetMapping("/{issueId}")
    public IssueDetailResponse showDetail(@PathVariable Long issueId) {
        return issueService.showDetail(issueId);
    }

    @GetMapping
    public IssueListResponseWrapper showList(IssueSearchRequest request) {
        return issueService.showList(request);
    }
}
