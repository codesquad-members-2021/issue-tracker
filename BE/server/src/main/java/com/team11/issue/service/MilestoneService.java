package com.team11.issue.service;

import com.team11.issue.domain.Milestone;
import com.team11.issue.dto.milestone.IssueCountResponseDTO;
import com.team11.issue.dto.milestone.MilestoneRequestDTO;
import com.team11.issue.dto.milestone.MilestoneResponseDTO;
import com.team11.issue.dto.milestone.MilestonesResponseDTO;
import com.team11.issue.exception.MilestoneNotFoundException;
import com.team11.issue.repository.IssueRepository;
import com.team11.issue.repository.MilestoneRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;
    private final IssueRepository issueRepository;

    private Milestone findMilestone(Long milestoneId) {
        return milestoneRepository.findById(milestoneId).orElseThrow(MilestoneNotFoundException::new);
    }

    private IssueCountResponseDTO getIssueCountResponseDTO(Long milestoneId) {
        int open = issueRepository.countByMilestoneIdAndIsOpen(milestoneId, true);
        int closed = issueRepository.countByMilestoneIdAndIsOpen(milestoneId, false);
        return IssueCountResponseDTO.from(open, closed);
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

    public MilestoneResponseDTO showMilestone(Long milestoneId) {
        return MilestoneResponseDTO.from(findMilestone(milestoneId), getIssueCountResponseDTO(milestoneId));
    }

    public MilestonesResponseDTO showAllMilestone() {
        List<MilestoneResponseDTO> milestones = milestoneRepository.findAll().stream()
                .map(milestone -> MilestoneResponseDTO.from(milestone, getIssueCountResponseDTO(milestone.getId())))
                .collect(Collectors.toList());

        return MilestonesResponseDTO.from(milestones);
    }
}
