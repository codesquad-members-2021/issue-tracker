package com.issuetracker.service;

import com.issuetracker.web.dto.reqeust.*;
import com.issuetracker.web.dto.response.*;
import com.issuetracker.domain.comment.Comment;
import com.issuetracker.domain.issue.Issue;
import com.issuetracker.domain.issue.IssueRepository;
import com.issuetracker.domain.milestone.Milestone;
import com.issuetracker.domain.user.User;
import com.issuetracker.exception.ElementNotFoundException;
import com.issuetracker.web.dto.vo.Assignee;
import com.issuetracker.web.dto.vo.Count;
import com.issuetracker.web.dto.vo.Status;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import static com.issuetracker.web.dto.vo.Status.CLOSE;
import static com.issuetracker.web.dto.vo.Status.OPEN;

@Service
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;
    private final LabelService labelService;
    private final MilestoneService milestoneService;
    private final UserService userService;

    public IssuesResponseDTO getIssues(SearchRequestDTO searchRequestDTO) {
        Count count = Count.builder()
                .label((int) labelService.count())
                .milestone((int) milestoneService.count())
                .openedIssue((int) issueRepository.countIssueFilteredByStatusAndSearchRequest(OPEN.getName(), searchRequestDTO))
                .closedIssue((int) issueRepository.countIssueFilteredByStatusAndSearchRequest(CLOSE.getName(), searchRequestDTO))
                .build();
        List<IssueResponseDTO> issues = issueRepository.findAllIssuesFilteredBySearchRequest(searchRequestDTO).stream()
                .map(issue -> IssueResponseDTO.of(issue, userService.usersToAssignees(issue), labelService.labelsToLabelDTOs(issue)))
                .collect(Collectors.toList());
        return IssuesResponseDTO.of(count, issues);
    }

    @Transactional
    public void changeIssueStatus(IssueNumbersRequestDTO requestDTO, String status) {
        boolean newStatus = !Status.statusToBoolean(status);
        issueRepository.updateStatusBy(newStatus, requestDTO.getIssueNumbers());
    }

    public IssueFormResponseDTO getIssueForm() {
        return IssueFormResponseDTO.builder()
                .assignees(userService.usersToAssignees())
                .labels(labelService.findAllLabelDTOs())
                .milestones(milestoneService.findAllMilestoneDTOs())
                .build();
    }

    public IssueNumberResponseDTO createIssue(IssueRequestDTO issueRequestDTO, Long userId) {
        Issue issue = Issue.create(
                issueRequestDTO.getTitle(),
                issueRequestDTO.getComment(),
                userService.findUserById(userId),
                labelService.findLabels(issueRequestDTO.getLabels()),
                userService.findAssignees(issueRequestDTO.getAssignees()),
                milestoneService.findMilestoneById(issueRequestDTO.getMilestone())
        );
        return new IssueNumberResponseDTO(issueRepository.save(issue).getId());
    }

    public IssueDetailPageResponseDTO getDetailPage(Long issueId, Long userId) {
        Issue issue = findIssueById(issueId);
        User loginUser = userService.findUserById(userId);
        return IssueDetailPageResponseDTO.of(
                issue,
                commentsToCommentDTOs(loginUser, issue),
                userService.usersToAssignees(issue),
                labelService.labelsToLabelDTOs(issue),
                milestoneService.findAllMilestoneDTOs()
        );
    }

    public void updateIssueTitle(Long issueId, IssueTitleDTO issueTitleDTO) {
        Issue updatedIssue = findIssueById(issueId).update(issueTitleDTO);
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
                .filter(comment -> comment.matchCommentId(commentDTO.getId()) && comment.matchAuthor(user))
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
                .filter(comment -> comment.matchCommentId(commentId) && comment.matchAuthor(loginUser))
                .findFirst()
                .orElseThrow(
                        () -> new ElementNotFoundException("Cannot find comment by given id.")
                );
        issue.deleteComment(targetComment);
        issueRepository.save(issue);
    }

    private Issue findIssueById(Long id) {
        return issueRepository.findById(id).orElseThrow(
                () -> new ElementNotFoundException("Cannot find issue by given id."));
    }

    private List<CommentDTO> commentsToCommentDTOs(User user, Issue issue) {
        return issue.getComments().stream()
                .map(comment -> CommentDTO.createCommentDTO(user, issue, comment))
                .collect(Collectors.toList());
    }

}
