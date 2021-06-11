package com.jane_eno.issue_tracker.service;

import com.jane_eno.issue_tracker.domain.comment.Comment;
import com.jane_eno.issue_tracker.domain.issue.Issue;
import com.jane_eno.issue_tracker.domain.issue.IssueRepository;
import com.jane_eno.issue_tracker.domain.label.Label;
import com.jane_eno.issue_tracker.domain.milestone.Milestone;
import com.jane_eno.issue_tracker.domain.user.User;
import com.jane_eno.issue_tracker.exception.ElementNotFoundException;
import com.jane_eno.issue_tracker.exception.InvalidSearchRequestException;
import com.jane_eno.issue_tracker.web.dto.reqeust.*;
import com.jane_eno.issue_tracker.web.dto.response.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
                .map(issue -> IssueResponseDTO.of(issue, userService.usersToAssignees(issue), labelService.labelsToLabelDTOs(issue)))
                .collect(Collectors.toList());
        return IssuesResponseDTO.of(count, issues);
    }

    public void changeIssueStatus(IssueNumbersRequestDTO requestDTO, String status) {
        boolean newStatus = !statusToBoolean(status);
        for (Long id : requestDTO.getIssueNumbers()) {
            issueRepository.updateStatusBy(id, newStatus);
        }
    }

    public IssueFormResponseDTO getIssueForm() {
        return IssueFormResponseDTO.builder()
                .assignees(userService.usersToAssignees())
                .labels(labelService.findAllLabelDTOs())
                .milestones(milestoneService.findAllMilestoneDTOs())
                .build();
    }

    public void createIssue(IssueRequestDTO issueRequestDTO, Long userId) {
        User author = userService.findUserById(userId);
        List<Label> labels = labelService.findLabels(issueRequestDTO.getLabels());
        List<User> assignees = userService.findAssignees(issueRequestDTO.getAssignees());
        Milestone milestone = milestoneService.findMilestoneById(issueRequestDTO.getMilestone());
        Issue issue = issueRequestDTO.toEntity(author).create(author, labels, assignees, milestone);
        System.out.println(issue.toString());
        issueRepository.save(issue);
    }

    public IssueDetailPageResponseDTO getDetailPage(Long issueId, Long userId) {
        Issue issue = findIssueById(issueId);
        User loginUser = userService.findUserById(userId);
        return IssueDetailPageResponseDTO.of(issue, commentsToCommentDTOs(loginUser, issue), userService.usersToAssignees(issue), labelService.labelsToLabelDTOs(issue), milestoneService.findAllMilestoneDTOs());
    }

    public void updateIssueTitle(Long issueId, IssueTitleDTO issueTitleDTO) {
        Issue updatedIssue = findIssueById(issueId).update(issueTitleDTO.getTitle());
        issueRepository.save(updatedIssue);
    }

    public AssigneesResponseDTO getAssignees(Long issueId) {
        Issue issue = findIssueById(issueId);
        return new AssigneesResponseDTO(userService.usersToAssignees(issue));
    }

    public void updateAssignees(Long issueId, AssigneesToUpdateRequestDTO assigneesToUpdateRequestDTO) {
        Issue issue = findIssueById(issueId);
        List<Long> assigneeIds = assigneesToUpdateRequestDTO.getAssignees().stream()
                .filter(Assignee::isAssigned)
                .map(Assignee::getId)
                .collect(Collectors.toList());
        issue.updateAssignees(userService.findAssignees(assigneeIds));
        issueRepository.save(issue);
    }

    public LabelsInIssueResponseDTO getLabels(Long issueId) {
        Issue issue = findIssueById(issueId);
        return new LabelsInIssueResponseDTO(labelService.labelsToLabelDTOs(issue));
    }

    public void updateLabels(Long issueId, LabelsToUpdateRequestDTO labelsToUpdateRequestDTO) {
        Issue issue = findIssueById(issueId);
        List<Long> labelIds = labelsToUpdateRequestDTO.getLabels().stream()
                .filter(LabelDTO::isChecked)
                .map(LabelDTO::getId)
                .collect(Collectors.toList());
        issue.updateLabels(labelService.findLabels(labelIds));
        issueRepository.save(issue);
    }

    public MilestonesInIssueResponseDTO getMilestones(Long issueId) {
        Issue issue = findIssueById(issueId);
        return new MilestonesInIssueResponseDTO(MilestoneDTO.of(issue.getMilestone()));
    }

    public void updateMilestone(Long issueId, MilestoneToUpdateRequestDTO milestone) {
        Issue issue = findIssueById(issueId);
        issue.updateMilestone(Milestone.create(milestone.getMilestone()));
        issueRepository.save(issue);
    }

    public void createComment(Long userId, Long issueId, CommentDTO commentDTO) {
        User user = userService.findUserById(userId);
        Issue issue = findIssueById(issueId);
        issueRepository.save(issue.addComment(Comment.create(user, commentDTO.getComment())));
    }

    public void updateComment(Long userId, Long issueId, CommentDTO commentDTO) {
        User user = userService.findUserById(userId);
        Issue issue = findIssueById(issueId);
        Comment targetComment = issue.getComments().stream()
                .filter(comment -> comment.matchComment(commentDTO.getId()) && comment.matchAuthor(user))
                .findFirst()
                .orElseThrow(
                        () -> new ElementNotFoundException("Cannot find comment by given id.")
                );
        targetComment.update(commentDTO.getComment());
        issueRepository.save(issue);
    }

    public void deleteComment(Long userId, Long issueId, Long commentId) {
        User loginUser = userService.findUserById(userId);
        Issue issue = findIssueById(issueId);
        Comment targetComment = issue.getComments().stream()
                .filter(comment -> comment.matchComment(commentId) && comment.matchAuthor(loginUser))
                .findFirst()
                .orElseThrow(
                        () -> new ElementNotFoundException("Cannot find comment by given id.")
                );
        issue.deleteComment(targetComment);
        issueRepository.save(issue);
    }

    public void deleteIssueById(Long id) {
        issueRepository.deleteById(id);
    }

    private List<CommentDTO> commentsToCommentDTOs(User user, Issue issue) {
        return issue.getComments().stream()
                .map(comment -> CommentDTO.createCommentDTO(user, issue, comment))
                .collect(Collectors.toList());
    }

    private Issue findIssueById(Long id) {
        return issueRepository.findById(id).orElseThrow(
                () -> new ElementNotFoundException("Cannot find issue by given id."));
    }

    private List<Issue> filterByStatus(String status) {
        boolean newStatus = statusToBoolean(status);
        return newStatus ? issueRepository.findAllByIsOpenTrue() : issueRepository.findAllByIsOpenFalse();
    }

    private boolean statusToBoolean(String status) {
        if (status.equals("open")) {
            return true;
        }
        if (status.equals("close")) {
            return false;
        }
        throw new InvalidSearchRequestException();
    }
}
