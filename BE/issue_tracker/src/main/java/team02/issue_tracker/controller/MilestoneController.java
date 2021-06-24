package team02.issue_tracker.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;
import team02.issue_tracker.dto.MilestoneCountResponse;
import team02.issue_tracker.dto.MilestoneRequest;
import team02.issue_tracker.dto.MilestoneResponse;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.service.MilestoneService;

import java.util.List;

@Api(tags = {"마일스톤 관련 API"}, description = "마일스톤 등록, 조회, 수정, 삭제 가능합니다.")
@RestController
@RequestMapping("/api/milestones")
public class MilestoneController {

    private final MilestoneService milestoneService;

    public MilestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @ApiOperation(value = "전체 마일스톤 조회", notes = "등록된 모든 마일스톤을 조회합니다.")
    @GetMapping
    public ApiResult<List<MilestoneResponse>> showAllMilestone() {
        return ApiResult.success(milestoneService.getAllMilestones());
    }

    @ApiOperation(value = "마일스톤 개수 조회", notes = "마일스톤 개수를 조회합니다.")
    @GetMapping("/count")
    public ApiResult<MilestoneCountResponse> showMilestoneCount() {
        return ApiResult.success(milestoneService.getMilestoneCount());
    }

    @ApiOperation(value = "마일스톤 등록", notes = "새로운 마일스톤을 등록합니다.")
    @PostMapping
    public ApiResult<String> createMilestone(@RequestBody MilestoneRequest milestoneRequest) {
        milestoneService.addMilestone(milestoneRequest);
        return ApiResult.ok();
    }

    @ApiOperation(value = "마일스톤 수정", notes = "마일스톤을 수정합니다.")
    @PutMapping("/{milestoneId}")
    public ApiResult<String> modifyMilestone(@PathVariable Long milestoneId, @RequestBody MilestoneRequest milestoneRequest) {
        milestoneService.modifyMilestone(milestoneId, milestoneRequest);
        return ApiResult.ok();
    }

    @ApiOperation(value = "마일스톤 삭제", notes = "마일스톤을 삭제합니다.")
    @DeleteMapping("/{milestoneId}")
    public ApiResult<String> deleteMilestone(@PathVariable Long milestoneId) {
        milestoneService.deleteMilestone(milestoneId);
        return ApiResult.ok();
    }
}
