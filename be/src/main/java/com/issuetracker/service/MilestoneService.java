package com.issuetracker.service;

import com.issuetracker.dto.MilestoneCountDto;
import com.issuetracker.dto.MilestoneDto;
import com.issuetracker.dto.MilestoneRequestDto;
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

    public List<MilestoneDto> searchAllMilestones(String closed) {
        if (closed == null) {
            return milestoneRepository.findAll().stream()
                    .map(milestone -> MilestoneDto.of(
                            milestone,
                            issueRepository.countOpenedIssuesByMilestoneId(milestone.getId()),
                            issueRepository.countClosedIssuesByMilestoneId(milestone.getId())))
                    .collect(Collectors.toList());
        } else {
            if (closed.equals("true") || closed.equals("false")) {
                return milestoneRepository.findAllByClosed(Boolean.valueOf(closed)).stream()
                        .map(milestone -> MilestoneDto.of(
                                milestone,
                                issueRepository.countOpenedIssuesByMilestoneId(milestone.getId()),
                                issueRepository.countClosedIssuesByMilestoneId(milestone.getId())
                        ))
                        .collect(Collectors.toList());
            } else {
                throw new IllegalArgumentException();
            }
        }
    }

    @Transactional
    public ResponseStatusDto delete(Long id) {
        issueRepository.setMilestoneNullFromIssueByMilestoneId(id);
        milestoneRepository.deleteMilestoneById(id);
        return new ResponseStatusDto("success");
    }

    public ResponseStatusDto edit(Long id, MilestoneRequestDto requestDto) {
        milestoneRepository.editMilestoneById(id, requestDto);
        return new ResponseStatusDto("success");
    }

    public ResponseStatusDto create(MilestoneRequestDto requestDto) {
        milestoneRepository.create(requestDto);
        return new ResponseStatusDto("success");
    }

    public MilestoneCountDto count() {
        return new MilestoneCountDto(milestoneRepository.countAllOpenedMilestone(), milestoneRepository.countAllClosedMilestone());
    }
}
