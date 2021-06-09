package team02.issue_tracker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.dto.DataResponse;
import team02.issue_tracker.service.IssueService;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    private IssueService issueService;

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @GetMapping
    public DataResponse showAllIssues() {
        return issueService.getAllIssues();
    }

}
