package com.codesquad.issuetracker.milestone.service;

import com.codesquad.issuetracker.milestone.domain.Milestone;
import com.codesquad.issuetracker.milestone.dto.MilestoneRequestDto;
import com.codesquad.issuetracker.milestone.dto.MilestoneResponseDto;
import com.codesquad.issuetracker.milestone.dto.MilestoneWrapper;
import com.codesquad.issuetracker.milestone.dto.MilestonesWrapper;
import com.codesquad.issuetracker.milestone.infra.MilestoneRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class MilestoneService {

    private final Logger logger = LoggerFactory.getLogger(MilestoneService.class);

    private final MilestoneRepository milestoneRepository;

    public MilestoneService(MilestoneRepository milestoneRepository) {
        this.milestoneRepository = milestoneRepository;
    }

    public MilestoneWrapper createMilestone(MilestoneRequestDto milestoneRequest) {
        Milestone milestone = milestoneRepository.save(milestoneRequest.toEntity());
        MilestoneResponseDto milestoneResponseDto = MilestoneResponseDto.fromEntity(milestone);

        logger.debug("{}", milestone);

        return MilestoneWrapper.create(milestoneResponseDto);
    }

    public MilestonesWrapper readAllMilestones() {
        List<Milestone> milestoneList = milestoneRepository.findAll();
        List<MilestoneResponseDto> milestoneResponseDtoList = milestoneList.stream()
                .map(milestone -> MilestoneResponseDto.fromEntity(milestone))
                .collect(Collectors.toList());

        return MilestonesWrapper.create(milestoneResponseDtoList);
    }

    public MilestoneWrapper updateMilestone(UUID id, MilestoneRequestDto milestoneRequest) {
        Milestone milestone = milestoneRepository.findById(id).orElseThrow(RuntimeException::new);
        milestone.update(milestoneRequest);
        Milestone updatedMilestone = milestoneRepository.save(milestone);

        logger.debug("{}", milestone);

        MilestoneResponseDto milestoneResponseDto = MilestoneResponseDto.fromEntity(updatedMilestone);

        return MilestoneWrapper.create(milestoneResponseDto);
    }

    public void deleteMilestone(UUID id) {
        milestoneRepository.deleteById(id);
    }
}
