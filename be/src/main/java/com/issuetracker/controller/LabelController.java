package com.issuetracker.controller;

import com.issuetracker.dto.LabelDto;
import com.issuetracker.dto.ResponseStatusDto;
import com.issuetracker.service.LabelService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/labels")
public class LabelController {
    private LabelService labelService;

    public LabelController(LabelService labelService) {
        this.labelService = labelService;
    }

    @GetMapping
    public List<LabelDto> viewAllLabels() {
        return labelService.searchAllLabels();
    }

    @PostMapping
    public ResponseStatusDto create(@RequestBody LabelDto labelDto) {
        return labelService.create(labelDto);
    }

    @PutMapping("/{id}")
    public ResponseStatusDto edit(@PathVariable Long id, @RequestBody LabelDto labelDto) {
        return labelService.edit(id, labelDto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseStatusDto delete(@PathVariable Long id) {
        return labelService.delete(id);
    }

}

