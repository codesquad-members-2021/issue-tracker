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

    private Milestone findMilestone(Long milestoneId) {
        return milestoneRepository.findById(milestoneId).orElseThrow(RuntimeException::new);
    }

    public void createMilestone(MilestoneRequestDTO milestoneRequestDTO) {
        milestoneRepository.save(Milestone.createMilestone(milestoneRequestDTO));
    }

    public void updateMilestone(Long milestoneId, MilestoneRequestDTO milestoneRequestDTO) {
        Milestone milestone = findMilestone(milestoneId);
        milestone.updateMilestone(milestoneRequestDTO);
        milestoneRepository.save(milestone);
    }

    public void deleteMilestone(Long milestoneId) {
        milestoneRepository.delete(findMilestone(milestoneId));
    }
}
