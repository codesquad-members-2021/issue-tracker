package com.codesquad.issuetracker.milestone.controller;


import com.codesquad.issuetracker.milestone.dto.MilestoneRequestDto;
import com.codesquad.issuetracker.milestone.dto.MilestoneWrapper;
import com.codesquad.issuetracker.milestone.dto.MilestonesWrapper;
import com.codesquad.issuetracker.milestone.service.MilestoneService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/milestones")
public class MilestoneController {

    private final Logger logger = LoggerFactory.getLogger(MilestoneController.class);

    private final MilestoneService milestoneService;

    public MilestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @GetMapping
    public MilestonesWrapper readMilestones() {
        return milestoneService.readAllMilestones();
    }

    @PostMapping
    public MilestoneWrapper createMilestone(@RequestBody MilestoneRequestDto milestoneRequestDto) {
        logger.debug("{}", milestoneRequestDto);
        return milestoneService.createMilestone(milestoneRequestDto);
    }

    @PutMapping("/{id}")
    public MilestoneWrapper updateMilestone(@PathVariable UUID id, @RequestBody MilestoneRequestDto milestoneRequest) {
        logger.debug("{}", id);
        return milestoneService.updateMilestone(id, milestoneRequest);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMilestone(@PathVariable UUID id) {
        milestoneService.deleteMilestone(id);
    }
}
