package team02.issue_tracker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team02.issue_tracker.dto.CountResponse;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.repository.IssueRepository;
import team02.issue_tracker.repository.LabelRepository;
import team02.issue_tracker.repository.MilestoneRepository;

@RestController
@RequestMapping("/api/common")
public class CommonController {

    private final IssueRepository issueRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;

    public CommonController(IssueRepository issueRepository, LabelRepository labelRepository, MilestoneRepository milestoneRepository) {
        this.issueRepository = issueRepository;
        this.labelRepository = labelRepository;
        this.milestoneRepository = milestoneRepository;
    }

    @GetMapping("/count")
    public ApiResult<CountResponse> showAllCount() {
        int openIssueCount = issueRepository.findByOpenTrueAndDeletedFalse().size();
        int closedIssueCount = issueRepository.findByOpenFalseAndDeletedFalse().size();
        int labelCount = labelRepository.findByDeletedFalse().size();
        int openMilestoneCount = milestoneRepository.findByOpenTrueAndDeletedFalse().size();
        int closedMilestoneCount = milestoneRepository.findByOpenFalseAndDeletedFalse().size();

        return ApiResult.success(new CountResponse(openIssueCount, closedIssueCount, labelCount, openMilestoneCount, closedMilestoneCount));
    }
}
