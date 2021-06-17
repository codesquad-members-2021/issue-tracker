package com.team11.issue.service;

import com.team11.issue.domain.Milestone;
import com.team11.issue.dto.milestone.MilestoneRequestDTO;
import com.team11.issue.repository.MilestoneRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;

    public void createMilestone(MilestoneRequestDTO milestoneRequestDTO) {
        milestoneRepository.save(Milestone.createMilestone(milestoneRequestDTO));
    }
}
