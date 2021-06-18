package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.Milestone;
import team02.issue_tracker.dto.MilestoneCountResponse;
import team02.issue_tracker.dto.MilestoneRequest;
import team02.issue_tracker.dto.MilestoneResponse;
import team02.issue_tracker.exception.MilestoneNotFoundException;
import team02.issue_tracker.repository.MilestoneRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MilestoneService {

    private static final Long EMPTY = 0L;

    private final MilestoneRepository milestoneRepository;

    public MilestoneService(MilestoneRepository milestoneRepository) {
        this.milestoneRepository = milestoneRepository;
    }

    public Milestone findOne(Long id) {
        Milestone milestone = milestoneRepository.findByIdAndDeletedFalse(id).orElseThrow(MilestoneNotFoundException::new);
        return milestone;
    }

    public Milestone getMilestone(Long milestoneId) {
        if (isMilestoneEmpty(milestoneId)) {
            return null;
        }
        return findOne(milestoneId);
    }

    private boolean isMilestoneEmpty(Long milestoneId) {
        return milestoneId == EMPTY;
    }

    public List<MilestoneResponse> getAllMilestones() {
        return milestoneRepository.findByDeletedFalse().stream()
                .map(MilestoneResponse::new)
                .collect(Collectors.toList());
    }

    public MilestoneCountResponse getMilestoneCount() {
        return new MilestoneCountResponse(getOpenMilestoneCount(), getClosedMilestoneCount());
    }

    public Long getOpenMilestoneCount() {
        return milestoneRepository.countByOpenTrueAndDeletedFalse();
    }

    public Long getClosedMilestoneCount() {
        return milestoneRepository.countByOpenFalseAndDeletedFalse();
    }

    public void addMilestone(MilestoneRequest milestoneRequest) {
        milestoneRepository.save(milestoneRequest.toMilestone());
    }

    public void modifyMilestone(Long milestoneId, MilestoneRequest milestoneRequest) {
        Milestone milestone = milestoneRepository.findByIdAndDeletedFalse(milestoneId).orElseThrow(MilestoneNotFoundException::new);
        milestone.edit(milestoneRequest);
        milestoneRepository.save(milestone);
    }

    public void deleteMilestone(Long milestoneId) {
        Milestone milestone = milestoneRepository.findByIdAndDeletedFalse(milestoneId).orElseThrow(MilestoneNotFoundException::new);
        milestone.delete();
        milestoneRepository.save(milestone);

    }
}
