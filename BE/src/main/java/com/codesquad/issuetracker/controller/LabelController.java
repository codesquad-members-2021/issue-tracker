package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.request.LabelRequest;
import com.codesquad.issuetracker.service.LabelService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/label")
public class LabelController {

    private final LabelService labelService;

    public LabelController(LabelService labelService) {
        this.labelService = labelService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse createLabel(@RequestBody LabelRequest labelRequest) {
        return ApiResponse.ok(labelService.create(labelRequest.create()));
    }

    @GetMapping
    public ApiResponse getLabels() {
        return ApiResponse.ok(labelService.getLabels());
    }

    @PutMapping("/{labelId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editLabel(@PathVariable Long labelId, @RequestBody LabelRequest labelRequest) {
        labelService.edit(labelId, labelRequest);
    }

}
