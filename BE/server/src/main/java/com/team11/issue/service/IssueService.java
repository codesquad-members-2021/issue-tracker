package com.team11.issue.service;

import com.team11.issue.domain.*;
import com.team11.issue.dto.issue.IssueChangeStatusRequestDTO;
import com.team11.issue.dto.issue.IssueRequestDTO;
import com.team11.issue.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class IssueService {

    private final UserRepository userRepository;
    private final IssueRepository issueRepository;
    private final AssigneeRepository assigneeRepository;
    private final IssueHasLabelRepository issueHasLabelRepository;
    private final MilestoneRepository milestoneRepository;
    private final LabelRepository labelRepository;
    private final HistoryRepository historyRepository;

    private User findUser(String userName) {
        return userRepository.findByName(userName).orElseThrow(RuntimeException::new);
    }

    private Issue findIssue(Long issueId) {
        return issueRepository.findById(issueId).orElseThrow(RuntimeException::new);
    }

    private Milestone findMilestone(IssueRequestDTO issueRequestDTO) {
        Milestone milestone = null;
        if(issueRequestDTO.getMilestone() != null) {
            milestone = milestoneRepository.findById(issueRequestDTO.getMilestone()).orElseThrow(RuntimeException::new);
        }
        return milestone;
    }

    private void saveIssueHasLabels(IssueRequestDTO issueRequestDTO, Issue issue) {
        if(issueRequestDTO.getLabels() != null) {
            List<IssueHasLabel> issueHasLabels = issueRequestDTO.getLabels().stream()
                    .map(labelId -> IssueHasLabel.createIssueHasLabel(issue, labelRepository.findById(labelId).orElseThrow(RuntimeException::new)))
                    .collect(Collectors.toList());
            issueHasLabelRepository.saveAll(issueHasLabels);
        }
    }

    private void deleteIssueHasLabels(Issue issue) {
        issueHasLabelRepository.deleteAllByIssueId(issue.getId());
    }

    private void createHistorysByStatus(IssueChangeStatusRequestDTO issueChangeStatusRequestDTO, String userName, String flag) {
        User user = findUser(userName);
        List<History> historys = issueChangeStatusRequestDTO.getIssueIds().stream()
                .map(issueId -> History.createHistory(user, findIssue(issueId), flag))
                .collect(Collectors.toList());
        historyRepository.saveAll(historys);
    }

    private void createHistory(User user, Issue issue, String flag) {
        History history = History.createHistory(user, issue, flag);
        historyRepository.save(history);
    }

    private void saveAssignees(IssueRequestDTO issueRequestDTO, Issue issue) {
        if(issueRequestDTO.getAssignees() != null) {
            List<Assignees> assignees = issueRequestDTO.getAssignees().stream()
                    .map(userId -> Assignees.createAssignees(issue, userRepository.findById(userId).orElseThrow(RuntimeException::new)))
                    .collect(Collectors.toList());
            assigneeRepository.saveAll(assignees);
        }
    }

    private void deleteAssignees(Issue issue) {
        assigneeRepository.deleteAllByIssueId(issue.getId());
    }

    @Transactional
    public void createIssue(IssueRequestDTO issueRequestDTO, String userName) {
        User user = findUser(userName);
        Milestone milestone = findMilestone(issueRequestDTO);
        Issue issue = issueRepository.save(Issue.createIssue(user, issueRequestDTO, milestone));

        saveIssueHasLabels(issueRequestDTO, issue);

        if(issueRequestDTO.getAssignees() != null) {
            List<Assignees> assignees = issueRequestDTO.getAssignees().stream()
                    .map(userId -> Assignees.createAssignees(issue, userRepository.findById(userId).orElseThrow(RuntimeException::new)))
                    .collect(Collectors.toList());
            assigneeRepository.saveAll(assignees);
        }
        createHistory(user, issue, "write");
    }

    @Transactional
    public void changeIssueStatus(IssueChangeStatusRequestDTO issueChangeStatusRequestDTO, String userName) {
        String status = issueChangeStatusRequestDTO.getChangeState();
        List<Issue> issues = issueChangeStatusRequestDTO.getIssueIds().stream()
                .map(issueId -> findIssue(issueId).updateStatus(status))
                .collect(Collectors.toList());
        issueRepository.saveAll(issues);

        createHistorysByStatus(issueChangeStatusRequestDTO, userName, status);
    }

    @Transactional
    public void updateIssue(Long issueId, IssueRequestDTO issueRequestDTO, String userName) {
        Issue issue = findIssue(issueId);
        Milestone milestone = findMilestone(issueRequestDTO);
        issue.updateIssue(issueRequestDTO, milestone);
        issueRepository.save(issue);

        deleteIssueHasLabels(issue);
        saveIssueHasLabels(issueRequestDTO, issue);

        deleteAssignees(issue);
        saveAssignees(issueRequestDTO, issue);

        createHistory(findUser(userName), issue, "update");
    }
}
