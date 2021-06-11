package team02.issue_tracker.controller;

import org.springframework.web.bind.annotation.*;
import team02.issue_tracker.dto.issue.DetailIssueResponse;
import team02.issue_tracker.dto.issue.IssueRequest;
import team02.issue_tracker.dto.issue.IssueResponse;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.service.IssueService;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    private IssueService issueService;

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @GetMapping
    public ApiResult<List<IssueResponse>> showAllIssues() {
        return issueService.getAllIssueResponses();
    }

    @GetMapping("/{issueId}")
    public ApiResult<DetailIssueResponse> showDetailIssue(@PathVariable Long issueId) {
        return issueService.getDetailIssueResponse(issueId);
    }

    @PostMapping
    public ApiResult<String> createIssue(@RequestBody IssueRequest issueRequest) {
        return issueService.addIssue(issueRequest);

    }
}
