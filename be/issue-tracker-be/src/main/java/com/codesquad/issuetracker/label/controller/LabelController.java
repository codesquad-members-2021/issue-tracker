package com.codesquad.issuetracker.label.controller;

import com.codesquad.issuetracker.label.dto.LabelRequest;
import com.codesquad.issuetracker.label.dto.LabelResponseWrapper;
import com.codesquad.issuetracker.label.dto.LabelResponses;
import com.codesquad.issuetracker.label.dto.LabelsCountResponseWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class LabelController {

    @GetMapping("/labels")
    public LabelResponses readAll() {
        return LabelDummyData.labelResponses();
    }

    @PostMapping("/labels")
    public LabelResponseWrapper create(@RequestBody @Valid LabelRequest labelRequest) {
        return LabelResponseWrapper.from(LabelDummyData.labelBe());
    }

    @PutMapping("/labels/{labelId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable long labelId, @RequestBody @Valid LabelRequest labelRequest) {
    }

    @GetMapping("/labels-count")
    public LabelsCountResponseWrapper readAllCount() {
        return LabelsCountResponseWrapper.from(LabelDummyData.labelsCountResponses());
    }
}
