package com.issuetracker.controller;

import com.issuetracker.dto.MilestoneDto;
import com.issuetracker.dto.ResponseStatusDto;
import com.issuetracker.service.MilestoneService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/milestones")
public class MilestoneController {
    private MilestoneService milestoneService;

    public MilestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @GetMapping
    public List<MilestoneDto> viewAllMilestones() {
        return milestoneService.searchAllMilestones();
    }

    @DeleteMapping("/{id}")
    public ResponseStatusDto delete(@PathVariable Long id) {
        return milestoneService.delete(id);
    }
}
