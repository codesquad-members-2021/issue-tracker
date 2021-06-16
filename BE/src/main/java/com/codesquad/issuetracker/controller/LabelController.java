package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.request.LabelRequest;
import com.codesquad.issuetracker.service.LabelService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashSet;
import java.util.Set;

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

        LabelResponse labelOne = new LabelResponse("BE", null, "0052CC");
        LabelResponse labelTwo = new LabelResponse("FE", null, "0052CC");
        LabelResponse labelThree = new LabelResponse("feature", "for the new feature", "FFFFFF");

        Set<LabelResponse> labels = new LinkedHashSet<>();
        labels.add(labelOne);
        labels.add(labelTwo);
        labels.add(labelThree);

        return ApiResponse.ok(labels);
    }

}
