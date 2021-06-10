package com.codesquad.issuetracker.issue;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IssueController {

    @GetMapping("/issues")
    public List<IssueResponse> readAll() {
        return IssueDummyData.issueResponses();
    }

    @GetMapping("/issues/{issueId}")
    public IssueDetailResponse readOne(@PathVariable long issueId) {
        return IssueDummyData.issueDetailResponse();
    }

    @PatchMapping("/issues")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateIssueStates(@RequestBody List<IssueStateRequest> issueStateRequest) {
    }
}
