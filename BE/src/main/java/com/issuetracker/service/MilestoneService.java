package com.issuetracker.service;

import com.issuetracker.domain.milestone.MilestoneRepository;
import com.issuetracker.web.dto.response.MilestoneDTO;
import com.issuetracker.domain.label.LabelRepository;
import com.issuetracker.domain.milestone.Milestone;
import com.issuetracker.web.dto.response.MilestonesResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;
    private final LabelRepository labelRepository;

    public MilestonesResponseDTO read() {
        List<MilestoneDTO> milestoneDTOs = milestoneRepository.findAll().stream()
                .map(MilestoneDTO::of)
                .collect(Collectors.toList());
        return MilestonesResponseDTO.of(labelRepository.count(), count(), milestoneDTOs);
    }

    public void create(MilestoneDTO milestone) {
        milestoneRepository.save(Milestone.create(milestone));
    }

    public void update(Long milestoneId, MilestoneDTO newMilestoneInfo) {
        Milestone milestone = findMilestoneById(milestoneId);
        milestone.update(newMilestoneInfo);
        milestoneRepository.save(milestone);
    }

    public void delete(Long milestoneId) {
        milestoneRepository.deleteById(milestoneId);
    }

    public Milestone findMilestoneById(Long milestoneId) {
        return milestoneRepository.findById(milestoneId).orElseThrow(EntityExistsException::new);
    }

    public Milestone findNullableMilestoneByTitle(String title) {
        if (title == null) {
            return null;
        }
        return milestoneRepository.findByTitle(title).orElse(new Milestone());
    }

    public List<MilestoneDTO> findAllMilestoneDTOs() {
        return milestoneRepository.findAll().stream().map(MilestoneDTO::of).collect(Collectors.toList());
    }

    public long count() {
        return milestoneRepository.count();
    }
}
