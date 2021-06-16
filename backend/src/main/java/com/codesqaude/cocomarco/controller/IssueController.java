package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.domain.issue.model.dto.IssueDetailResponse;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueListResponseWrapper;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueRequest;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueSearchRequest;
import com.codesqaude.cocomarco.service.IssueService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import static com.codesqaude.cocomarco.domain.user.User.SAMPLE_UUID;

@RestController
@RequestMapping("/issues")
@RequiredArgsConstructor
public class IssueController {

    private final IssueService issueService;

    @PostMapping
    public void create(@RequestBody IssueRequest issueRequest) {
        issueService.create(issueRequest, SAMPLE_UUID);
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
