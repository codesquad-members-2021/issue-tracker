package com.codesquad.issuetracker.issue.controller;

import com.codesquad.issuetracker.issue.dto.IssueDetailResponseWrapper;
import com.codesquad.issuetracker.issue.dto.IssueRequest;
import com.codesquad.issuetracker.issue.dto.IssueResponses;
import com.codesquad.issuetracker.issue.dto.IssueStateRequests;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class IssueController {

    @GetMapping("/issues")
    public IssueResponses readAll() {
        return IssueDummyData.issueResponses();
    }

    @GetMapping("/issues/{issueId}")
    public IssueDetailResponseWrapper readOne(@PathVariable long issueId) {
        return IssueDetailResponseWrapper.from(IssueDummyData.issueDetailResponse());
    }

    @PostMapping("/issues")
    public IssueDetailResponseWrapper create(@RequestBody @Valid IssueRequest issueRequest) {
        return IssueDetailResponseWrapper.from(IssueDummyData.issueDetailResponse());
    }

    @PutMapping("/issues/{issueId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable long issueId, @RequestBody @Valid IssueRequest issueRequest) {
    }

    @PatchMapping("/issues")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateIssueStates(@RequestBody @Valid IssueStateRequests issueStateRequests) {
    }
}
