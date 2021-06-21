package com.issuetracker.service;

import com.issuetracker.dto.MilestoneDto;
import com.issuetracker.dto.ResponseStatusDto;
import com.issuetracker.repository.IssueRepository;
import com.issuetracker.repository.MilestoneRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MilestoneService {
    private MilestoneRepository milestoneRepository;
    private IssueRepository issueRepository;

    public MilestoneService(MilestoneRepository milestoneRepository, IssueRepository issueRepository) {
        this.milestoneRepository = milestoneRepository;
        this.issueRepository = issueRepository;
    }

    public List<MilestoneDto> searchAllMilestones() {
        return milestoneRepository.findAll().stream()
                .map(milestone -> MilestoneDto.of(
                        milestone,
                        issueRepository.countOpenedIssuesByMilestoneId(milestone.getId()),
                        issueRepository.countClosedIssuesByMilestoneId(milestone.getId())))
                .collect(Collectors.toList());
    }

    @Transactional
    public ResponseStatusDto delete(Long id) {
        issueRepository.setMilestoneNullFromIssueByMilestoneId(id);
        milestoneRepository.deleteMilestoneById(id);
        return new ResponseStatusDto("success");
    }
}
