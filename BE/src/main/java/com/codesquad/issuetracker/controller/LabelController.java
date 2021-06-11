package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.request.LabelRequest;
import com.codesquad.issuetracker.response.LabelResponse;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashSet;
import java.util.Set;

@RestController
@RequestMapping("/label")
public class LabelController {

    @PostMapping
    public ApiResponse createLabel(@RequestBody LabelRequest labelRequest) {
        return ApiResponse.ok("Create label");
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
