package team02.issue_tracker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
}
