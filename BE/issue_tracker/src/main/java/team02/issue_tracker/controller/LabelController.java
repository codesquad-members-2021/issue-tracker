package team02.issue_tracker.controller;

import org.springframework.web.bind.annotation.*;
import team02.issue_tracker.dto.LabelCountResponse;
import team02.issue_tracker.dto.LabelRequest;
import team02.issue_tracker.dto.LabelResponse;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.service.LabelService;

import java.util.List;

@RestController
@RequestMapping("/api/labels")
public class LabelController {

    private final LabelService labelService;

    public LabelController(LabelService labelService) {
        this.labelService = labelService;
    }

    @GetMapping
    public ApiResult<List<LabelResponse>> showAllLabels() {
        return ApiResult.success(labelService.getAllLabelResponses());
    }

    @GetMapping("/count")
    public ApiResult<LabelCountResponse> showLabelCount() {
        return ApiResult.success(labelService.getLabelCount());
    }

    @PutMapping("/{labelId}")
    public ApiResult<String> modifyLabel(@PathVariable Long labelId, @RequestBody LabelRequest labelRequest) {
        labelService.modifyLabel(labelId, labelRequest);
        return ApiResult.ok();
    }
}
