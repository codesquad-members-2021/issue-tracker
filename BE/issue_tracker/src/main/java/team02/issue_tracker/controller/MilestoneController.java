package team02.issue_tracker.controller;

import org.springframework.web.bind.annotation.*;
import team02.issue_tracker.dto.MilestoneCountResponse;
import team02.issue_tracker.dto.MilestoneRequest;
import team02.issue_tracker.dto.MilestoneResponse;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.service.MilestoneService;

import java.util.List;

@RestController
@RequestMapping("/api/milestones")
public class MilestoneController {

    private final MilestoneService milestoneService;

    public MilestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @GetMapping
    public ApiResult<List<MilestoneResponse>> showAllMilestone() {
        return ApiResult.success(milestoneService.getAllMilestones());
    }

    @GetMapping("/count")
    public ApiResult<MilestoneCountResponse> showMilestoneCount() {
        return ApiResult.success(milestoneService.getMilestoneCount());
    }

    @PostMapping
    public ApiResult<String> createMilestone(@RequestBody MilestoneRequest milestoneRequest) {
        milestoneService.addMilestone(milestoneRequest);
        return ApiResult.ok();
    }
}
