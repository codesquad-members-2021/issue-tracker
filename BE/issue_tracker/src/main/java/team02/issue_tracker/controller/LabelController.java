package team02.issue_tracker.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;
import team02.issue_tracker.dto.LabelCountResponse;
import team02.issue_tracker.dto.LabelRequest;
import team02.issue_tracker.dto.LabelResponse;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.service.LabelService;

import java.util.List;

@Api(tags = {"레이블 관련 API"}, description = "레이블 등록, 조회, 수정, 삭제 가능합니다.")
@RestController
@RequestMapping("/api/labels")
public class LabelController {

    private final LabelService labelService;

    public LabelController(LabelService labelService) {
        this.labelService = labelService;
    }

    @ApiOperation(value = "전체 레이블 조회", notes = "등록된 모든 레이블을 조회합니다.")
    @GetMapping
    public ApiResult<List<LabelResponse>> showAllLabels() {
        return ApiResult.success(labelService.getAllLabelResponses());
    }

    @ApiOperation(value = "레이블 개수 조회", notes = "레이블 개수를 조회합니다.")
    @GetMapping("/count")
    public ApiResult<LabelCountResponse> showLabelCount() {
        return ApiResult.success(labelService.getLabelCountResponse());
    }

    @ApiOperation(value = "레이블 수정", notes = "레이블을 수정합니다.")
    @PutMapping("/{labelId}")
    public ApiResult<String> modifyLabel(@PathVariable Long labelId, @RequestBody LabelRequest labelRequest) {
        labelService.modifyLabel(labelId, labelRequest);
        return ApiResult.ok();
    }

    @ApiOperation(value = "레이블 등록", notes = "새로운 레이블을 등록합니다.")
    @PostMapping
    public ApiResult<String> createLabel(@RequestBody LabelRequest labelRequest) {
        labelService.addLabel(labelRequest);
        return ApiResult.ok();
    }

    @ApiOperation(value = "레이블 삭제", notes = "레이블을 삭제합니다.")
    @DeleteMapping("/{labelId}")
    public ApiResult<String> deleteLabel(@PathVariable Long labelId) {
        labelService.deleteLabel(labelId);
        return ApiResult.ok();
    }
}
