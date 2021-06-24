package team02.issue_tracker.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.dto.CountResponse;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.service.IssueService;
import team02.issue_tracker.service.LabelService;
import team02.issue_tracker.service.MilestoneService;

@Api(tags = {"전체 개수 API"}, description = "이슈, 레이블, 마일스톤의 개수 조회가 가능합니다.")
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

    @ApiOperation(value = "전체 개수 조회", notes = "열린 이슈 개수, 닫힌 이슈 개수, 레이블 개수, 열린 마일스톤 개수, 닫힌 마일스톤 개수를 조회힙니다.")
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
