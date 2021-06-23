package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.common.exception.notfound.NotFoundMilestoneException;
import com.codesqaude.cocomarco.domain.label.LabelRepository;
import com.codesqaude.cocomarco.domain.milestone.Milestone;
import com.codesqaude.cocomarco.domain.milestone.MilestoneRepository;
import com.codesqaude.cocomarco.domain.milestone.dto.MilestoneRequest;
import com.codesqaude.cocomarco.domain.milestone.dto.MilestoneResponse;
import com.codesqaude.cocomarco.domain.milestone.dto.MilestoneResponseWrapper;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
@Transactional(readOnly = true)
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;
    private final LabelRepository labelRepository;

    public Milestone findById(Long milestoneId) {
        return milestoneRepository.findById(milestoneId).orElseThrow(NotFoundMilestoneException::new);
    }

    public MilestoneResponseWrapper findAll(Pageable pageable) {
        List<Milestone> milestonePage = milestoneRepository.findAllMilestone(pageable);
        List<MilestoneResponse> milestoneResponses = milestonePage.stream().map(MilestoneResponse::of).collect(Collectors.toList());
        return new MilestoneResponseWrapper(milestoneResponses, labelRepository.count());
    }

    @Transactional
    public void create(MilestoneRequest milestoneRequest) {
        milestoneRepository.save(milestoneRequest.toEntity());
    }

    @Transactional
    public void modify(Long milestoneId, MilestoneRequest milestoneRequest) {
        Milestone milestone = findById(milestoneId);
        milestone.modify(milestoneRequest.toEntity());
    }

    @Transactional
    public void delete(Long milestoneId) {
        milestoneRepository.delete(findById(milestoneId));
    }
}
