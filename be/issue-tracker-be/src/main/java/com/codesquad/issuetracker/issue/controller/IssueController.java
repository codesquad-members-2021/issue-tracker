package com.codesquad.issuetracker.issue.controller;

import com.codesquad.issuetracker.issue.dto.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public IssueDetailResponseWrapper create(IssueRequest issueRequest) {
        return IssueDetailResponseWrapper.from(IssueDummyData.issueDetailResponse());
    }

    @PutMapping("/issues/{issueId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable long issueId, IssueRequest issueRequest) {
    }

    @PatchMapping("/issues")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateIssueStates(@RequestBody List<IssueStateRequest> issueStateRequest) {
    }
}
