package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.domain.milestone.MilestoneRequest;
import com.codesqaude.cocomarco.domain.milestone.MilestonesWrapper;
import com.codesqaude.cocomarco.service.MilestoneService;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/milestones")
public class milestoneController {

    private MilestoneService milestoneService;

    public milestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @GetMapping
    public MilestonesWrapper findAll(Pageable pageable) {
        return milestoneService.findAll(pageable);
    }

    @PostMapping
    public void create(@RequestBody MilestoneRequest milestoneRequest) {
        milestoneService.create(milestoneRequest);
    }

    @PutMapping("/{milestoneId}")
    public void update(@RequestBody MilestoneRequest milestoneRequest, @PathVariable Long milestoneId){
        milestoneService.modify(milestoneId,milestoneRequest);
    }

    @DeleteMapping("/{milestoneId}")
    public void delete(@PathVariable Long milestoneId){
        milestoneService.delete(milestoneId);
    }
}
