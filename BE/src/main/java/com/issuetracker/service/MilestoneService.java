package com.issuetracker.service;

import com.issuetracker.domain.elasticsearch.IssueDocument;
import com.issuetracker.domain.elasticsearch.IssueDocumentRepository;
import com.issuetracker.domain.issue.Issue;
import com.issuetracker.domain.milestone.MilestoneRepository;
import com.issuetracker.exception.MilestoneNotFoundException;
import com.issuetracker.web.dto.reqeust.MilestoneNumbersRequestDTO;
import com.issuetracker.web.dto.response.MilestoneDTO;
import com.issuetracker.domain.label.LabelRepository;
import com.issuetracker.domain.milestone.Milestone;
import com.issuetracker.web.dto.response.MilestonesResponseDTO;
import com.issuetracker.web.dto.vo.Status;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;
    private final LabelRepository labelRepository;
    private final IssueDocumentRepository issueDocumentRepository;

    public MilestonesResponseDTO read(String status) {
        boolean newStatus = Status.statusToBoolean(status);
        List<MilestoneDTO> milestoneDTOs = milestoneRepository.findAllByIsOpen(newStatus).stream()
                .map(milestone -> MilestoneDTO.of(milestone, false))
                .collect(Collectors.toList());
        return MilestonesResponseDTO.of(labelRepository.count(), countByIsOpen(true), countByIsOpen(false), milestoneDTOs);
    }

    @Transactional
    public void changeMilestoneStatus(MilestoneNumbersRequestDTO requestDTO, String status) {
        boolean newStatus = !Status.statusToBoolean(status);
        System.out.println(requestDTO.getMilestoneNumbers());
        milestoneRepository.updateStatusBy(newStatus, requestDTO.getMilestoneNumbers());
    }

    public void create(MilestoneDTO milestone) {
        milestoneRepository.save(Milestone.create(milestone));
    }

    public void update(Long milestoneId, MilestoneDTO newMilestoneInfo) {
        Milestone milestone = findMilestoneById(milestoneId);
        milestone.update(newMilestoneInfo);
        Milestone updatedMilestone = milestoneRepository.save(milestone);
        updatedMilestone.getIssues().forEach(this::synchronizeIssue);
    }

    public void delete(Long milestoneId) {
        Milestone milestone = findMilestoneById(milestoneId);
        milestone.getIssues().stream()
                .map(Issue::deleteMilestone)
                .forEach(this::synchronizeIssue);
        milestoneRepository.delete(milestone);
    }

    public Milestone findMilestoneById(Long milestoneId) {
        if (milestoneId == null) {
            return null;
        }
        return milestoneRepository.findById(milestoneId).orElseThrow(MilestoneNotFoundException::new);
    }

    public List<MilestoneDTO> findAllMilestoneDTOs() {
        return milestoneRepository.findAll().stream()
                .map(milestone -> MilestoneDTO.of(milestone, false))
                .collect(Collectors.toList());
    }

    public List<MilestoneDTO> milestonesToMilestoneDTOs(Issue issue) {
        return milestoneRepository.findAll().stream()
                .map(milestone -> MilestoneDTO.of(milestone, checkMilestone(milestone, issue)))
                .collect(Collectors.toList());
    }

    private boolean checkMilestone(Milestone targetMilestone, Issue issue) {
        if (issue.getMilestone() == null) {
            return false;
        }
        return issue.getMilestone().equals(targetMilestone);
    }

    public MilestoneDTO findMilestoneInIssue(Issue issue) {
        if (issue.getMilestone() == null) {
            return null;
        }
        return MilestoneDTO.of(issue.getMilestone(), true);
    }

    public long countByIsOpen(boolean isOpen) {
        return milestoneRepository.countByIsOpen(isOpen);
    }

    private void synchronizeIssue(Issue issue) {
        issueDocumentRepository.save(IssueDocument.of(issue));
    }
}
