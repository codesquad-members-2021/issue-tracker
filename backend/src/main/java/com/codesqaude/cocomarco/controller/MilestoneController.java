package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.domain.milestone.dto.MilestoneRequest;
import com.codesqaude.cocomarco.domain.milestone.dto.MilestoneResponseWrapper;
import com.codesqaude.cocomarco.service.MilestoneService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/milestones")
@AllArgsConstructor
public class MilestoneController {

    private final MilestoneService milestoneService;

    @GetMapping
    public MilestoneResponseWrapper findAll(Pageable pageable) {
        return milestoneService.findAll(pageable);
    }

    @PostMapping
    public void create(@RequestBody MilestoneRequest milestoneRequest) {
        milestoneService.create(milestoneRequest);
    }

    @PutMapping("/{milestoneId}")
    public void update(@PathVariable Long milestoneId, @RequestBody MilestoneRequest milestoneRequest) {
        milestoneService.modify(milestoneId, milestoneRequest);
    }

    @DeleteMapping("/{milestoneId}")
    public void delete(@PathVariable Long milestoneId) {
        milestoneService.delete(milestoneId);
    }
}
