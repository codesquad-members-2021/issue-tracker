package com.codesquad.issuetracker.label.controller;

import com.codesquad.issuetracker.label.dto.LabelRequestDto;
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
    public LabelsWrapper readAllLabels() {
        return labelService.readAllLabels();
    }

    @PostMapping
    public LabelWrapper createLabels(@RequestBody LabelRequestDto labelRequestDto) {
        return labelService.createLabels(labelRequestDto);
    }

    @PutMapping("/{id}")
    public LabelWrapper updateLabel(@PathVariable UUID id, @RequestBody LabelRequestDto labelRequestDto) {
        return labelService.updateLabel(id, labelRequestDto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteLabel(@PathVariable UUID id) {
        labelService.deleteLabel(id);
    }

}
