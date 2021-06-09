package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.ApiResponse;
import com.codesquad.issuetracker.request.LabelRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/label")
public class LabelController {

    @PostMapping
    public ApiResponse createLabel(@RequestBody LabelRequest labelRequest) {
        return ApiResponse.ok("Create label");
    }

    @GetMapping
    public ApiResponse getLabels(){
        return ApiResponse.ok("Get Labels");
    }

}
