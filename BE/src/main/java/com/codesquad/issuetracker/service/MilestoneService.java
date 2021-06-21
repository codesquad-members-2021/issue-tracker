package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Milestone;
import com.codesquad.issuetracker.repository.MilestoneRepository;
import com.codesquad.issuetracker.request.EditedMilestone;
import com.codesquad.issuetracker.request.MilestoneRequest;
import com.codesquad.issuetracker.response.MilestoneResponse;
import com.codesquad.issuetracker.util.PaginationUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;

    private static final int PAGE_SIZE = 10;
    private static final String SORT_BY = "id";

    public MilestoneService(MilestoneRepository milestoneRepository) {
        this.milestoneRepository = milestoneRepository;
    }

    @Transactional
    public MilestoneResponse create(MilestoneRequest milestoneRequest) {
        Milestone milestone = milestoneRequest.create();
        return MilestoneResponse.create(milestoneRepository.save(milestone));
    }

    public List<MilestoneResponse> getList(int page) {
        return milestoneRepository.findAll(PaginationUtil.descendingPageable(page, PAGE_SIZE, SORT_BY)).stream()
                .map(milestone -> MilestoneResponse.create(milestone))
                .collect(Collectors.toList());
    }

    public MilestoneResponse getOne(Long id) {
        Milestone milestone = milestoneRepository.findById(id)
                .orElseThrow(IllegalArgumentException::new);
        return MilestoneResponse.create(milestone);
    }

    @Transactional
    public void edit(Long milestoneId, EditedMilestone editedMilestone) {
        Milestone milestone = milestoneRepository.findById(milestoneId)
                .orElseThrow(IllegalArgumentException::new);
        milestone.update(editedMilestone);
        milestoneRepository.save(milestone);
    }

    @Transactional
    public void delete(Long milestoneId) {
        milestoneRepository.deleteById(milestoneId);
    }
}
