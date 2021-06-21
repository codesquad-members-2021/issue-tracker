package com.issuetracker.controller;

import com.issuetracker.dto.LabelDto;
import com.issuetracker.service.LabelService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}

