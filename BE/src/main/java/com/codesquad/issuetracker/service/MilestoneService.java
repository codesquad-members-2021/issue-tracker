package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Milestone;
import com.codesquad.issuetracker.repository.MilestoneRepository;
import com.codesquad.issuetracker.request.MilestoneRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;

    public MilestoneService(MilestoneRepository milestoneRepository) {
        this.milestoneRepository = milestoneRepository;
    }

    @Transactional
    public Milestone create(MilestoneRequest milestoneRequest){
        Milestone milestone = milestoneRequest.create();
        return milestoneRepository.save(milestone);
    }

}
