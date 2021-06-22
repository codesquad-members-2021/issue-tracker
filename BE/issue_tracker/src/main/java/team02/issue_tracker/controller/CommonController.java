package team02.issue_tracker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.dto.CountResponse;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.service.IssueService;
import team02.issue_tracker.service.LabelService;
import team02.issue_tracker.service.MilestoneService;

@RestController
@RequestMapping("/api/common")
public class CommonController {

    private final IssueService issueService;
    private final LabelService labelService;
    private final MilestoneService milestoneService;

    public CommonController(IssueService issueService, LabelService labelService, MilestoneService milestoneService) {
        this.issueService = issueService;
        this.labelService = labelService;
        this.milestoneService = milestoneService;
    }

    @GetMapping("/count")
    public ApiResult<CountResponse> showAllCount() {
        Long openIssueCount = issueService.getOpenIssueCount();
        Long closedIssueCount = issueService.getClosedIssueCount();
        Long labelCount = labelService.getLabelCount();
        Long openMilestoneCount = milestoneService.getOpenMilestoneCount();
        Long closedMilestoneCount = milestoneService.getClosedMilestoneCount();

        return ApiResult.success(new CountResponse(openIssueCount, closedIssueCount, labelCount, openMilestoneCount, closedMilestoneCount));
    }
}
