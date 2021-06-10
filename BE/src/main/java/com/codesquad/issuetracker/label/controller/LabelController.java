package com.codesquad.issuetracker.label.controller;

import com.codesquad.issuetracker.label.dto.LabelRequest;
import com.codesquad.issuetracker.label.dto.LabelWrapper;
import com.codesquad.issuetracker.label.dto.LabelsWrapper;
import com.codesquad.issuetracker.label.service.LabelService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/labels")
public class LabelController {

    private final LabelService labelService;

    public LabelController(LabelService labelService) {
        this.labelService = labelService;
    }

    @GetMapping
    public LabelsWrapper labels() {
        return labelService.labels();
    }

    @PostMapping
    public LabelWrapper create(@RequestBody LabelRequest labelRequest) {
        return labelService.create(labelRequest);
    }

    @PutMapping("/{id}")
    public LabelWrapper update(@PathVariable UUID id, @RequestBody LabelRequest labelRequest) {
        return labelService.update(id, labelRequest);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) {
        labelService.delete(id);
    }

}
