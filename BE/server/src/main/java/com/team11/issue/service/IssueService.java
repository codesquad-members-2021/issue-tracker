package com.team11.issue.service;

import com.team11.issue.domain.*;
import com.team11.issue.dto.issue.*;
import com.team11.issue.dto.milestone.IssueCountResponseDTO;
import com.team11.issue.dto.milestone.MilestoneResponseDTO;
import com.team11.issue.exception.*;
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
    private final CommentRepository commentRepository;

    private User findUser(Long userId) {
        return userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
    }

    private User findUser(String userName) {
        return userRepository.findByName(userName).orElseThrow(UserNotFoundException::new);
    }

    private Issue findIssue(Long issueId) {
        return issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
    }

    private List<Issue> findAllIssue() {
        return issueRepository.findAllByIsDeleteFalse();
    }

    private Label findLabel(Long labelId) {
        return labelRepository.findById(labelId).orElseThrow(LabelNotFoundException::new);
    }

    private Milestone findMilestone(Long milestoneId) {
        return milestoneRepository.findById(milestoneId).orElseThrow(MilestoneNotFoundException::new);
    }

    private Milestone findMilestone(IssueRequestDTO issueRequestDTO) {
        Milestone milestone = null;
        if (issueRequestDTO.getMilestone() != null) {
            milestone = findMilestone(issueRequestDTO.getMilestone());
        }
        return milestone;
    }

    private History findHistory(Long issueId) {
        return historyRepository.findFirstByIssueIdOrderByHistoryDateTimeDesc(issueId);
    }

    private List<Assignees> findAssignees(Long issueId) {
        return assigneeRepository.findAllByIssueId(issueId);
    }

    private List<IssueHasLabel> findIssueHasLabel(Long issueId) {
        return issueHasLabelRepository.findAllByIssueId(issueId);
    }

    private List<Comment> findComments(Long issueId) {
        return commentRepository.findAllByIssueId(issueId);
    }

    private boolean verifyAssignees(String userName, Issue issue) {
        User user = findUser(userName);

        List<Assignees> assignees = findAssignees(issue.getId()).stream()
                .filter(assignee -> assignee.getUser().getId() == user.getId())
                .collect(Collectors.toList());

        return !assignees.isEmpty();
    }

    private void confirmAssignees(String userName, Issue issue, String errorMessage) {
        if (!verifyAssignees(userName, issue)) {
            throw new AssigneeIllegalException(errorMessage);
        }
    }

    private void saveAssignees(IssueRequestDTO issueRequestDTO, Issue issue) {
        if (issueRequestDTO.getAssignees() != null) {
            List<Assignees> assignees = issueRequestDTO.getAssignees().stream()
                    .map(userId -> Assignees.createAssignees(issue, findUser(userId)))
                    .collect(Collectors.toList());
            assigneeRepository.saveAll(assignees);
        }
    }

    private void saveIssueHasLabels(IssueRequestDTO issueRequestDTO, Issue issue) {
        if (issueRequestDTO.getLabels() != null) {
            List<IssueHasLabel> issueHasLabels = issueRequestDTO.getLabels().stream()
                    .map(labelId -> IssueHasLabel.createIssueHasLabel(issue, findLabel(labelId)))
                    .collect(Collectors.toList());
            issueHasLabelRepository.saveAll(issueHasLabels);
        }
    }

    private void createHistory(User user, Issue issue, String flag) {
        History history = History.createHistory(user, issue, flag);
        historyRepository.save(history);
    }

    private void createHistoriesByStatus(IssueChangeStatusRequestDTO issueChangeStatusRequestDTO, String userName, String flag) {
        User user = findUser(userName);
        List<History> histories = issueChangeStatusRequestDTO.getIssueIds().stream()
                .map(issueId -> History.createHistory(user, findIssue(issueId), flag))
                .collect(Collectors.toList());
        historyRepository.saveAll(histories);
    }

    private void deleteIssueHasLabels(Issue issue) {
        issueHasLabelRepository.deleteAllByIssueId(issue.getId());
    }

    private void deleteAssignees(Issue issue) {
        assigneeRepository.deleteAllByIssueId(issue.getId());
    }

    private MilestoneResponseDTO getMilestoneResponseDTO(Issue issue) {
        if (issue.getMilestone() == null) {
            return null;
        }
        Milestone milestone = findMilestone(issue.getMilestone().getId());
        return MilestoneResponseDTO.from(milestone, getIssueCountResponseDTO(milestone.getId()));
    }

    private IssueCountResponseDTO getIssueCountResponseDTO(Long milestoneId) {
        int open = issueRepository.countByMilestoneIdAndIsOpen(milestoneId, true);
        int closed = issueRepository.countByMilestoneIdAndIsOpen(milestoneId, false);
        return IssueCountResponseDTO.from(open, closed);
    }

    @Transactional
    public void createIssue(IssueRequestDTO issueRequestDTO, String userName) {
        User user = findUser(userName);
        Milestone milestone = findMilestone(issueRequestDTO);
        Issue issue = issueRepository.save(Issue.createIssue(user, issueRequestDTO, milestone));

        saveIssueHasLabels(issueRequestDTO, issue);

        if (issueRequestDTO.getAssignees() != null) {
            List<Assignees> assignees = issueRequestDTO.getAssignees().stream()
                    .map(userId -> Assignees.createAssignees(issue, findUser(userId)))
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

        createHistoriesByStatus(issueChangeStatusRequestDTO, userName, status);
    }

    @Transactional
    public void updateIssue(Long issueId, IssueRequestDTO issueRequestDTO, String userName) {
        Issue issue = findIssue(issueId);

        confirmAssignees(userName, issue, "로그인한 유저는 이슈 수정 권한이 없습니다.");

        Milestone milestone = findMilestone(issueRequestDTO);
        issue.updateIssue(issueRequestDTO, milestone);
        issueRepository.save(issue);

        deleteIssueHasLabels(issue);
        saveIssueHasLabels(issueRequestDTO, issue);

        deleteAssignees(issue);
        saveAssignees(issueRequestDTO, issue);

        createHistory(findUser(userName), issue, "update");
    }

    public void deleteIssue(Long issueId, String userName) {
        Issue issue = findIssue(issueId);

        confirmAssignees(userName, issue, "로그인한 유저는 이슈 삭제 권한이 없습니다.");

        issue.deleteIssue();
        issueRepository.save(issue);

        createHistory(findUser(userName), issue, "delete");
    }

    public IssueDetailResponseDTO showIssue(Long issueId) {
        Issue issue = findIssue(issueId);
        History history = findHistory(issueId);
        User user = findUser(issue.getUser().getId());
        List<Assignees> assignees = findAssignees(issueId);
        List<IssueHasLabel> issueHasLabels = findIssueHasLabel(issueId);
        List<Comment> comments = findComments(issueId);
        return IssueDetailResponseDTO.from(issue, history, user, assignees, getMilestoneResponseDTO(issue), issueHasLabels, comments);
    }


    public IssuesResponseDTO showAllIssue() {
        List<IssueDetailResponseDTO> issueDetailResponseDTOS = findAllIssue().stream()
                .map(issue -> showIssue(issue.getId()))
                .collect(Collectors.toList());
        return IssuesResponseDTO.from(issueDetailResponseDTOS);
    }


}
