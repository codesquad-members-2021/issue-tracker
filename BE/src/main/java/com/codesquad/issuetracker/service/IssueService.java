package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.*;
import com.codesquad.issuetracker.exception.NoSuchIssueException;
import com.codesquad.issuetracker.repository.*;
import com.codesquad.issuetracker.request.IssueRequest;
import com.codesquad.issuetracker.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class IssueService {

    private final IssueRepository issueRepository;
    private final LabelRepository labelRepository;
    private final IssueLabelRepository issueLabelRepository;
    private final MilestoneRepository milestoneRepository;
    private final AssigneeRepository assigneeRepository;

    @Autowired
    public IssueService(IssueRepository issueRepository, LabelRepository labelRepository,
                        IssueLabelRepository issueLabelRepository,
                        MilestoneRepository milestoneRepository, AssigneeRepository assigneeRepository) {
        this.issueRepository = issueRepository;
        this.labelRepository = labelRepository;
        this.issueLabelRepository = issueLabelRepository;
        this.milestoneRepository = milestoneRepository;
        this.assigneeRepository = assigneeRepository;
    }

    public List<IssueResponse> getOpenedIssues() {
        List<IssueResponse> result = new ArrayList<>();
        List<Issue> issues = issueRepository.getIssuesByStatusTrue();
        for (Issue issue : issues) {
            result.add(issueToIssueResponse(issue));
        }
        return result;
    }

    public List<IssueResponse> getClosedIssues() {
        List<IssueResponse> result = new ArrayList<>();
        List<Issue> issues = issueRepository.getIssuesByStatusFalse();
        for (Issue issue : issues) {
            result.add(issueToIssueResponse(issue));
        }
        return result;
    }

    public IssueResponse getIssue(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        return issueToIssueResponse(issue);
    }

    public IssueResponse addIssue(Issue issue) {
        return issueToIssueResponse(issueRepository.save(issue));
    } // IssueRequest의 User 수정 필요

    public void updateTitle(Long issueId, IssueRequest issueRequest) {
        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        updateIssue.setTitle(issueRequest.getTitle());
        issueRepository.save(updateIssue);
    }

    public void updateAssignee(Long issueId, IssueRequest issueRequest) {
        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        updateIssue.setAssignees(issueRequest.getAssigneeList());
        issueRepository.save(updateIssue);
    }

    public void updateContent(Long issueId, IssueRequest issueRequest) {
        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        updateIssue.setContent(issueRequest.getContent());
        issueRepository.save(updateIssue);
    }

    public void updateStatus(Long issueId, IssueRequest issueRequest) {
        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        updateIssue.setStatus(issueRequest.isStatus());
        issueRepository.save(updateIssue);
    }

    public void updateLabel(Long issueId, IssueRequest issueRequest) {
        // IssueLabel을 Issue의 ID 기준으로 찾아 온 다음 더하거나(INSERT) 삭제(DELETE)한다
        List<Long> labelIdsBeEdited = issueLabelRepository.findIssueLabelsLabelIdByIssueId(issueId); // 원본
        ArrayList<Label> labelsToEdit = issueRequest.getLabelList(); // 요청 (수정할것)
        List<Long> labelIdsToEdit = labelsToEdit.stream().map(label -> label.getId()).collect(Collectors.toList());
        for (Label label : labelsToEdit) {
            if (labelIdsBeEdited.contains(label.getId())) { // 원본에 요청항목이 존재하면 넘어감 (추가/삭제 필요 x)
                continue;
            }
            if (!labelIdsBeEdited.contains(label.getId())) { // 원본에 수정할 항목이 없으면 추가함
                IssueLabel issueLabel = IssueLabel.issueToIssueLabel(issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new), label);
                issueLabelRepository.save(issueLabel);
            }
        }
        for (int i = 0; i < labelIdsBeEdited.size(); i++) {
            if (!labelIdsToEdit.contains(labelIdsBeEdited.get(i))) {
                issueLabelRepository.deleteIssueLabelByIssueIdAndLabelId(issueId, labelIdsBeEdited.get(i));
            }
        }
    }

    public void updateMilestone(Long issueId, IssueRequest issueRequest) {
        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        updateIssue.setMilestoneId(issueRequest.getMilestoneId());
        issueRepository.save(updateIssue);
    }

    public void deleteIssue(Long issueId) {
        issueRepository.deleteById(issueId);
    }

    private Set<Label> getLabelsForIssue(Long issueId) {
        return labelRepository.findByIssueId(issueId);
    }

    private IssueResponse issueToIssueResponse(Issue issue) {
        return new IssueResponse(issue.getId(), issue.getTitle(), issue.getContent(), issue.isStatus(),
                issue.getCreatedAt(), makeUserResponses(issue.getUser()),
                makeMilestoneForIssueResponse(issue.getMilestoneId()), makeLabelResponses(issue.getId()),
                makeAssigneeForIssueResponse(issue.getId()));
    }

    private Set<LabelResponse> makeLabelResponses(Long issueId) {
        Set<Label> labels = getLabelsForIssue(issueId);
        Set<LabelResponse> result = new HashSet<>();
        for (Label label : labels) {
            result.add(LabelResponse.labelToLabelResponse(label));
        }
        return result;
    }

    private UserResponse makeUserResponses(User user) {
        return new UserResponse(user.getId(), user.getName(), user.getLoginId());
    }

    private MilestoneForIssueResponse makeMilestoneForIssueResponse(Long milestoneId) {
        if (milestoneId == null) {
            return new MilestoneForIssueResponse();
        }
        Milestone milestone = milestoneRepository.findById(milestoneId).orElseThrow(NoSuchElementException::new);
        return MilestoneForIssueResponse.milestoneToMilestoneForIssueResponse(milestone);
    }

    private Set<AssigneeForIssueResponse> makeAssigneeForIssueResponse(Long issueId) {
        Set<Assignee> assignees = assigneeRepository.findAssigneesByIssueId(issueId);
        Set<AssigneeForIssueResponse> result = new HashSet<>();
        for (Assignee assignee : assignees) {
            result.add(AssigneeForIssueResponse.assigneeToAssigneeForIssueResponse(assignee));
        }
        return result;
    }
}
