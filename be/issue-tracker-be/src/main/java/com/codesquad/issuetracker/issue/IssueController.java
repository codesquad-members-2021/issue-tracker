package com.codesquad.issuetracker.issue;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class IssueController {

    @GetMapping("/issues")
    public List<IssueResponse> readAll() {
        return IssueDummyData.issueResponses();
    }
}
