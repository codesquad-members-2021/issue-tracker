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
@RequestMapping("/api/count")
public class CommonController {

    private final IssueRepository issueRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;

    public CommonController(IssueRepository issueRepository, LabelRepository labelRepository, MilestoneRepository milestoneRepository) {
        this.issueRepository = issueRepository;
        this.labelRepository = labelRepository;
        this.milestoneRepository = milestoneRepository;
    }

    @GetMapping
    public ApiResult<CountResponse> showAllCount() {
        int openIssueCount = issueRepository.findOpenIssues().size();
        int closedIssueCount = issueRepository.findClosedIssues().size();
        int labelCount = labelRepository.findAll().size();
        int openMilestoneCount = milestoneRepository.findOpenMilestones().size();
        int closedMilestoneCount = milestoneRepository.findClosedMilestones().size();

        return ApiResult.success(new CountResponse(openIssueCount, closedIssueCount, labelCount, openMilestoneCount, closedMilestoneCount));
    }
}
