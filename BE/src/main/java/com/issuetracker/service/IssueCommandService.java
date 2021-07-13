package com.issuetracker.service;

import com.issuetracker.domain.comment.Comment;
import com.issuetracker.domain.issue.Issue;
import com.issuetracker.domain.elasticsearch.IssueDocument;
import com.issuetracker.domain.elasticsearch.IssueDocumentRepository;
import com.issuetracker.domain.issue.IssueRepository;
import com.issuetracker.domain.milestone.Milestone;
import com.issuetracker.domain.user.User;
import com.issuetracker.exception.CommentNotFoundException;
import com.issuetracker.exception.IllegalUserAccessException;
import com.issuetracker.web.dto.reqeust.*;
import com.issuetracker.web.dto.response.CommentDTO;
import com.issuetracker.web.dto.response.IssueNumberResponseDTO;
import com.issuetracker.web.dto.response.LabelDTO;
import com.issuetracker.web.dto.vo.Assignee;
import com.issuetracker.web.dto.vo.Status;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class IssueCommandService {

    private final IssueRepository issueRepository;
    private final IssueDocumentRepository issueDocumentRepository;
    private final LabelService labelService;
    private final MilestoneService milestoneService;
    private final UserService userService;

    @Transactional
    public void changeIssueStatus(IssueNumbersRequestDTO requestDTO, String status) {
        boolean newStatus = !Status.statusToBoolean(status);
        issueRepository.updateStatusBy(newStatus, requestDTO.getIssueNumbers());
        requestDTO.getIssueNumbers().stream()
                .map(this::findIssueById)
                .forEach(this::synchronizeIssue);
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
        Issue savedIssue = issueRepository.save(issue);
        synchronizeIssue(savedIssue);
        return new IssueNumberResponseDTO(savedIssue.getId());
    }

    public IssueTitleDTO updateIssueTitle(Long issueId, IssueTitleDTO issueTitleDTO) {
        Issue updatedIssue = findIssueById(issueId).update(issueTitleDTO);
        Issue savedIssue = issueRepository.save(updatedIssue);
        synchronizeIssue(savedIssue);
        return IssueTitleDTO.of(savedIssue);
    }

    public void updateAssignees(Long issueId, AssigneesToUpdateRequestDTO assigneesToUpdateRequestDTO) {
        Issue issue = findIssueById(issueId);
        List<Long> assigneeIds = assigneesToUpdateRequestDTO.getAssignees().stream()
                .filter(Assignee::isAssigned)
                .map(Assignee::getId)
                .collect(Collectors.toList());
        issue.updateAssignees(userService.findAssignees(assigneeIds));
        synchronizeIssue(issueRepository.save(issue));
    }

    public void updateLabels(Long issueId, LabelsToUpdateRequestDTO labelsToUpdateRequestDTO) {
        Issue issue = findIssueById(issueId);
        List<Long> labelIds = labelsToUpdateRequestDTO.getLabels().stream()
                .filter(LabelDTO::isChecked)
                .map(LabelDTO::getId)
                .collect(Collectors.toList());
        issue.updateLabels(labelService.findLabels(labelIds));
        synchronizeIssue(issueRepository.save(issue));
    }

    public void updateMilestone(Long issueId, MilestoneToUpdateRequestDTO milestoneDTO) {
        Issue issue = findIssueById(issueId);
        Milestone milestone = milestoneDTO.checkMilestoneId() ? milestoneService.findMilestoneById(milestoneDTO.getMilestoneId()) : null;
        issue.updateMilestone(milestone);
        synchronizeIssue(issueRepository.save(issue));
    }

    public CommentDTO createComment(Long userId, Long issueId, CommentDTO commentDTO) {
        User user = userService.findUserById(userId);
        Issue issue = findIssueById(issueId);
        Issue updatedIssue = issueRepository.save(issue.addComment(Comment.create(user, commentDTO.getComment())));
        synchronizeIssue(updatedIssue);
        return CommentDTO.createCommentDTO(user, updatedIssue, updatedIssue.getLastComment());
    }

    public void updateComment(Long userId, Long issueId, CommentDTO commentDTO) {
        User user = userService.findUserById(userId);
        Issue issue = findIssueById(issueId);
        Comment targetComment = issue.getComments().stream()
                .filter(comment -> comment.matchCommentId(commentDTO.getId()))
                .findFirst()
                .orElseThrow(CommentNotFoundException::new);
        if (targetComment.verifyAuthor(user)) {
            throw new IllegalUserAccessException();
        }
        targetComment.update(commentDTO.getComment());
        synchronizeIssue(issueRepository.save(issue));
    }

    public void deleteComment(Long userId, Long issueId, Long commentId) {
        User loginUser = userService.findUserById(userId);
        Issue issue = findIssueById(issueId);
        Comment targetComment = issue.getComments().stream()
                .filter(comment -> comment.matchCommentId(commentId))
                .findFirst()
                .orElseThrow(CommentNotFoundException::new);
        if (targetComment.verifyAuthor(loginUser)) {
            throw new IllegalUserAccessException();
        }
        issue.deleteComment(targetComment);
        synchronizeIssue(issueRepository.save(issue));
    }

    private Issue findIssueById(Long id) {
        return issueRepository.findById(id).orElseThrow(CommentNotFoundException::new);
    }

    private void synchronizeIssue(Issue issue) {
        issueDocumentRepository.save(IssueDocument.of(issue));
    }
}
