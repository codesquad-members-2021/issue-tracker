package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.domain.label.LabelRepository;
import com.codesqaude.cocomarco.domain.milestone.Milestone;
import com.codesqaude.cocomarco.domain.milestone.MilestoneRepository;
import com.codesqaude.cocomarco.domain.milestone.MilestoneResponse;
import com.codesqaude.cocomarco.domain.milestone.MilestonesWrapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class MilestoneService {

    private MilestoneRepository milestoneRepository;
    private LabelRepository labelRepository;

    public MilestoneService(MilestoneRepository milestoneRepository, LabelRepository labelRepository) {
        this.milestoneRepository = milestoneRepository;
        this.labelRepository = labelRepository;
    }

    public MilestonesWrapper findAll(Pageable pageable) {
        Page<Milestone> milestonePage = milestoneRepository.findAll(pageable);
        List<MilestoneResponse> milestoneResponses = milestonePage.stream().map(MilestoneResponse::of).collect(Collectors.toList());
        return new MilestonesWrapper(milestoneResponses, labelRepository.count());
    }
}
