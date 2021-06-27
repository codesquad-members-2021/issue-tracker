package com.issuetracker.controller;

import com.issuetracker.dto.MilestoneCountDto;
import com.issuetracker.dto.MilestoneDto;
import com.issuetracker.dto.MilestoneRequestDto;
import com.issuetracker.dto.ResponseStatusDto;
import com.issuetracker.service.MilestoneService;
import org.springframework.http.HttpStatus;
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
    public List<MilestoneDto> viewAllMilestones(@RequestParam(required = false) String closed) {
        return milestoneService.searchAllMilestones(closed);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseStatusDto delete(@PathVariable Long id) {
        return milestoneService.delete(id);
    }

    @PutMapping("/{id}")
    public ResponseStatusDto edit(@PathVariable Long id, @RequestBody MilestoneRequestDto requestDto) {
        return milestoneService.edit(id, requestDto);
    }

    @PostMapping
    public ResponseStatusDto create(@RequestBody MilestoneRequestDto requestDto) {
        return milestoneService.create(requestDto);
    }

    @GetMapping("/count")
    public MilestoneCountDto count() {
        return milestoneService.count();
    }
}
