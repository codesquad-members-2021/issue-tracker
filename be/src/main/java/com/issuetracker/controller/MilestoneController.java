package com.issuetracker.controller;

import com.issuetracker.dto.MilestoneDto;
import com.issuetracker.service.MilestoneService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
