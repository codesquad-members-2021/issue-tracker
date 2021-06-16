package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.*;
import com.codesquad.issuetracker.exception.NoSuchIssueException;
import com.codesquad.issuetracker.repository.AssigneeRepository;
import com.codesquad.issuetracker.repository.IssueRepository;
import com.codesquad.issuetracker.repository.LabelRepository;
import com.codesquad.issuetracker.repository.MilestoneRepository;
import com.codesquad.issuetracker.request.IssueRequest;
import com.codesquad.issuetracker.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class IssueService {

    private final IssueRepository issueRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;
    private final AssigneeRepository assigneeRepository;

    @Autowired
    public IssueService(IssueRepository issueRepository, LabelRepository labelRepository,
                        MilestoneRepository milestoneRepository, AssigneeRepository assigneeRepository) {
        this.issueRepository = issueRepository;
        this.labelRepository = labelRepository;
        this.milestoneRepository = milestoneRepository;
        this.assigneeRepository = assigneeRepository;
    }

    public List<IssueResponse> getOpenedIssues() {
        List<IssueResponse> result = new ArrayList<>();
        List<Issue> issues = issueRepository.getIssuesByStatusTrue();
        for(Issue issue : issues) {
            result.add(issueToIssueResponse(issue));
        }
        return result;
    }

    public List<IssueResponse> getClosedIssues() {
        List<IssueResponse> result = new ArrayList<>();
        List<Issue> issues = issueRepository.getIssuesByStatusFalse();
        for(Issue issue : issues) {
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
      //id로 Issue찾기 - Issue의 내용 변경 - save()로 저장(후 저장한 값 리턴)
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

//    public Issue updateLabel(Long issueId, List<String> labels) {
//        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
//        updateIssue.set
//    }

    public void updateMilestone(Long issueId, IssueRequest issueRequest) {
        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        updateIssue.setMilestoneId(issueRequest.getMilestoneId());
        issueRepository.save(updateIssue);
    }

    public void deleteIssue(Long issueId) {
        issueRepository.deleteById(issueId);
    }

    private IssueResponse issueToIssueResponse(Issue issue) {
        return new IssueResponse(issue.getId(), issue.getTitle(), issue.getContent(), issue.isStatus(),
                issue.getCreatedAt(), makeUserResponses(issue.getUser()),
                makeMilestoneForIssueResponse(issue.getMilestoneId()), makeLabelResponses(issue.getId()),
                makeAssigneeForIssueResponse(issue.getId()));
    }

    private Set<LabelResponse> makeLabelResponses(Long issueId) {
        Set<Label> labels = labelRepository.findByIssueId(issueId);
        Set<LabelResponse> result = new HashSet<>();
        for (Label label : labels) {
            result.add(LabelResponse.labelToLabelResponse(label));
        }
        return result;
    }

    private UserResponse makeUserResponses(User user) {
        return new UserResponse(user.getName(), user.getLoginId());
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
