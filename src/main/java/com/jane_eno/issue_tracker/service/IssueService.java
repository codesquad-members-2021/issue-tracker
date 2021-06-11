package com.jane_eno.issue_tracker.service;

import com.jane_eno.issue_tracker.domain.issue.Issue;
import com.jane_eno.issue_tracker.domain.issue.IssueRepository;
import com.jane_eno.issue_tracker.domain.label.Color;
import com.jane_eno.issue_tracker.domain.label.Label;
import com.jane_eno.issue_tracker.domain.milestone.Milestone;
import com.jane_eno.issue_tracker.domain.user.User;
import com.jane_eno.issue_tracker.exception.ElementNotFoundException;
import com.jane_eno.issue_tracker.exception.InvalidSearchRequestException;
import com.jane_eno.issue_tracker.web.dto.reqeust.*;
import com.jane_eno.issue_tracker.web.dto.response.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static com.jane_eno.issue_tracker.web.dto.response.Assignee.createAssignee;
import static com.jane_eno.issue_tracker.web.dto.response.IssueResponseDTO.createIssueResponseDTO;
import static com.jane_eno.issue_tracker.web.dto.response.IssuesResponseDTO.createIssuesResponseDTO;
import static com.jane_eno.issue_tracker.web.dto.response.LabelDTO.createLabelDTO;

@Service
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;
    private final LabelService labelService;
    private final MilestoneService milestoneService;
    private final UserService userService;

    public IssuesResponseDTO getIssues(String status) {
        List<Issue> openedIssues = issueRepository.findAllByIsOpenTrue();
        List<Issue> closedIssues = issueRepository.findAllByIsOpenFalse();
        Count count = Count.builder()
                .label((int) labelService.count())
                .milestone((int) milestoneService.count())
                .openedIssue(openedIssues.size())
                .closedIssue(closedIssues.size())
                .build();
        List<IssueResponseDTO> issues = filterByStatus(status).stream()
                .map(issue -> createIssueResponseDTO(issue, usersToAssignees(issue), labelsToLabelDTOs(issue)))
                .collect(Collectors.toList());
        return createIssuesResponseDTO(count, issues);
    }

    private List<Issue> filterByStatus(String status) {
        if (status.equals("open")) {
            return issueRepository.findAllByIsOpenTrue();
        }
        if (status.equals("close")) {
            return issueRepository.findAllByIsOpenFalse();
        }
        throw new InvalidSearchRequestException();
    }

    private List<Assignee> usersToAssignees(Issue issue) {
        return userService.findAll().stream()
                .map(user -> createAssignee(user, issue))
                .collect(Collectors.toList());
    }

    private List<Assignee> usersToAssignees() {
        return userService.findAll().stream()
                .map(Assignee::createAssignee)
                .collect(Collectors.toList());
    }

    private List<LabelDTO> labelsToLabelDTOs(Issue issue) {
        return labelService.findAllLabels().stream()
                .map(label -> createLabelDTO(label, issue))
                .collect(Collectors.toList());
    }

    public void changeIssueStatus(IssueNumbersRequestDTO requestDTO, String status) {
        boolean newStatus = !Boolean.parseBoolean(status);
        for (Long id : requestDTO.getIssueNumbers()) {
            issueRepository.updateStatusBy(id, newStatus);
        }
    }

    private Issue findIssueById(Long id) {
        return issueRepository.findById(id).orElseThrow(
                () -> new ElementNotFoundException("Cannot find issue by given id."));
    }

    public IssueFormResponseDTO getIssueForm() {
        return IssueFormResponseDTO.builder()
                .assignees(usersToAssignees())
                .labels(labelService.findAllLabelDTOs())
                .milestones(milestoneService.findAllMilestoneDTOs())
                .build();
    }

    public void createIssue(IssueRequestDTO issueRequestDTO, Long userId) {
        User author = userService.findByUserId(userId);
        List<Label> labels = labelService.findLabels(issueRequestDTO.getLabels());
        List<User> assignees = userService.findAssignees(issueRequestDTO.getAssignees());
        Milestone milestone = milestoneService.findMilestoneById(issueRequestDTO.getMilestone());
        Issue issue = issueRequestDTO.toEntity(author).create(author, labels, assignees, milestone);
        System.out.println(issue.toString());
        issueRepository.save(issue);
    }

    public IssueDetailPageResponseDTO getDetailPage(Long issueId, Long userId) {
        Issue issue = findIssueById(issueId);
        User loginUser = userService.findByUserId(userId);
        return IssueDetailPageResponseDTO.builder()
                .id(issue.getId())
                .title(issue.getTitle())
                .status(issue.isOpen())
                .createdDateTime(issue.getCreatedDateTime())
                .comments(commentsToCommentDTOs(loginUser, issue))
                .assignees(usersToAssignees(issue))
                .labels(labelsToLabelDTOs(issue))
                .milestones(milestoneService.findAllMilestoneDTOs())
                .build();
    }

    private List<CommentDTO> commentsToCommentDTOs(User user, Issue issue) {
        return issue.getComments().stream()
                .map(comment -> CommentDTO.createCommentDTO(user, issue, comment))
                .collect(Collectors.toList());
    }

    public void updateIssueTitle(Long issueId, IssueTitleDTO issueTitleDTO) {
        Issue updatedIssue = findIssueById(issueId).update(issueTitleDTO.getTitle());
        issueRepository.save(updatedIssue);
    }

    public AssigneesResponseDTO getAssignees(Long issueId) {
        Issue issue = findIssueById(issueId);
        return new AssigneesResponseDTO(usersToAssignees(issue));
    }

    public void updateAssignees(Long issueId, AssigneesToUpdateRequestDTO updateAssigneesRequestDTO) {
    }

    public LabelsInIssueResponseDTO getLabels(Long issueID) {
        return LabelsInIssueResponseDTO.builder()
                .labels(new ArrayList<>(Arrays.asList(
                        new LabelDTO(1L, "bug", new Color("#FFFFFF", "#CCFFCC"), "bug fix", true),
                        new LabelDTO(2L, "enhancement", new Color("#FFFFFF", "#99FFFF"), "enhancement", false)
                ))).build();
    }

    public void updateLabels(Long issueId, LabelsToUpdateRequestDTO labelsToUpdateRequestDTO) {

    }

    public MilestonesInIssueResponseDTO getMilestones(Long issueId) {
        return MilestonesInIssueResponseDTO.builder()
                .milestones(new ArrayList<>(Arrays.asList(
                        new MilestoneDTO(1L, "마일스톤 제목", "레이블에 대한 설명", LocalDateTime.now(), null, 3L, 1L),
                        new MilestoneDTO(2L, "로그인 하기", "내일까지 끝내야 한다.", LocalDateTime.now(), null, 4L, 5L)
                )))
                .build();
    }

    public void updateMilestones(Long issueId, MilestonesToUpdateRequestDTO milestonesToUpdateRequestDTO) {

    }

    public void createComment(Long issueId, String comment) {

    }

    public void updateComment(Long issueId, String comment) {

    }

    public void deleteComment(Long issueId, Long commentId) {

    }
}
