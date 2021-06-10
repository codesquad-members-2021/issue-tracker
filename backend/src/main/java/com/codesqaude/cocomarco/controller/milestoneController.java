package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.domain.milestone.MilestonesWrapper;
import com.codesqaude.cocomarco.service.MilestoneService;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("milestones")
public class milestoneController {

    private MilestoneService milestoneService;

    public milestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @GetMapping
    public MilestonesWrapper findAll(Pageable pageable){
        return milestoneService.findAll(pageable);
    }
}
