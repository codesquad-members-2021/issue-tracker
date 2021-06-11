package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.common.exception.NotFoundMilestoneException;
import com.codesqaude.cocomarco.domain.label.LabelRepository;
import com.codesqaude.cocomarco.domain.milestone.*;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class MilestoneService {

    private MilestoneRepository milestoneRepository;
    private LabelRepository labelRepository;

    public Milestone findById(Long milestoneId){
        return milestoneRepository.findById(milestoneId).orElseThrow(NotFoundMilestoneException::new);
    }

    public MilestonesWrapper findAll(Pageable pageable) {
        Page<Milestone> milestonePage = milestoneRepository.findAll(pageable);
        List<MilestoneResponse> milestoneResponses = milestonePage.stream().map(MilestoneResponse::of).collect(Collectors.toList());
        return new MilestonesWrapper(milestoneResponses, labelRepository.count());
    }

    public void create(MilestoneRequest milestoneRequest){
        milestoneRepository.save(milestoneRequest.toEntity());
    }

    public void modify(Long milestoneId, MilestoneRequest milestoneRequest){
        Milestone milestone = findById(milestoneId);
        milestone.modify(milestoneRequest.toEntity());
        milestoneRepository.save(milestone);
    }

    public void delete(Long milestoneId){
        milestoneRepository.delete(findById(milestoneId));
    }
}
