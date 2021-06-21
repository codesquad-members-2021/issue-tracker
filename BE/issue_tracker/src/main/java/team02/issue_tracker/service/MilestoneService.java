package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.Milestone;
import team02.issue_tracker.dto.MilestoneCountResponse;
import team02.issue_tracker.dto.MilestoneRequest;
import team02.issue_tracker.dto.MilestoneResponse;
import team02.issue_tracker.exception.MilestoneNotFoundException;
import team02.issue_tracker.repository.IssueRepository;
import team02.issue_tracker.repository.MilestoneRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MilestoneService {

    private static final Long EMPTY = 0L;

    private final MilestoneRepository milestoneRepository;
    private final IssueRepository issueRepository;

    public MilestoneService(MilestoneRepository milestoneRepository, IssueRepository issueRepository) {
        this.milestoneRepository = milestoneRepository;
        this.issueRepository = issueRepository;
    }

    public Milestone findOne(Long id) {
        return milestoneRepository.findById(id).orElseThrow(MilestoneNotFoundException::new);
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
        return milestoneRepository.findAll().stream()
                .map(milestone -> {
                    Long openIssueCount = issueRepository.countByMilestoneIdAndIsOpenTrue(milestone.getId());
                    Long closedIssueCount = issueRepository.countByMilestoneIdAndIsOpenFalse(milestone.getId());
                    return new MilestoneResponse(milestone, openIssueCount, closedIssueCount);
                })
                .collect(Collectors.toList());
    }

    public MilestoneCountResponse getMilestoneCount() {
        return new MilestoneCountResponse(getOpenMilestoneCount(), getClosedMilestoneCount());
    }

    public Long getOpenMilestoneCount() {
        return milestoneRepository.countByIsOpenTrue();
    }

    public Long getClosedMilestoneCount() {
        return milestoneRepository.countByIsOpenFalse();
    }

    public void addMilestone(MilestoneRequest milestoneRequest) {
        milestoneRepository.save(milestoneRequest.toMilestone());
    }

    public void modifyMilestone(Long milestoneId, MilestoneRequest milestoneRequest) {
        Milestone milestone = milestoneRepository.findById(milestoneId).orElseThrow(MilestoneNotFoundException::new);
        milestone.edit(milestoneRequest);
        milestoneRepository.save(milestone);
    }

    /**
     * 마일스톤 제거시 해당 마일스톤을 참조하는 이슈들의 마일스톤 값 null로 변경
     */
    public void deleteMilestone(Long milestoneId) {
        Milestone milestone = milestoneRepository.findById(milestoneId).orElseThrow(MilestoneNotFoundException::new);
        milestone.deleteIssues();
        milestoneRepository.delete(milestone);
    }
}
