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
    public void createLabel(@RequestBody LabelRequest labelRequest) {
        labelService.create(labelRequest.create());
    }

    @GetMapping
    public ApiResponse getLabels(){
        return ApiResponse.ok(labelService.getLabels());
    }

}
