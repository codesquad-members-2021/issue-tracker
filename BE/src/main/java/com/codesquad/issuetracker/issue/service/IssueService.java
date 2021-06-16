package com.codesquad.issuetracker.issue.service;

import com.codesquad.issuetracker.comment.domain.Comment;
import com.codesquad.issuetracker.comment.infra.CommentRepository;
import com.codesquad.issuetracker.issue.domain.Issue;
import com.codesquad.issuetracker.issue.dto.*;
import com.codesquad.issuetracker.issue.infra.IssueRepository;
import com.codesquad.issuetracker.label.domain.Label;
import com.codesquad.issuetracker.label.infra.LabelRepository;
import com.codesquad.issuetracker.milestone.infra.MilestoneRepository;
import com.codesquad.issuetracker.user.domain.User;
import com.codesquad.issuetracker.user.infra.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
public class IssueService {

    private final IssueRepository issueRepository;
    private final CommentRepository commentRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;
    private final UserRepository userRepository;

    public IssueService(IssueRepository issueRepository,
                        CommentRepository commentRepository,
                        LabelRepository labelRepository,
                        MilestoneRepository milestoneRepository,
                        UserRepository userRepository) {
        this.issueRepository = issueRepository;
        this.commentRepository = commentRepository;
        this.labelRepository = labelRepository;
        this.milestoneRepository = milestoneRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public IssueWrapper createIssue(IssueCreateRequest issueCreateRequest, User author) {
        Issue issue = issueCreateRequest.createIssue(author);

        for (UUID assigneeId : issueCreateRequest.getAssigneeIds()) {
            issue.addAssignee(userRepository.findById(assigneeId).orElseThrow(RuntimeException::new));
        }

        for (UUID labelId : issueCreateRequest.getLabelIds()) {
            issue.addLabel(labelRepository.findById(labelId).orElseThrow(RuntimeException::new));
        }

        if (issueCreateRequest.hasMilestoneId()) {
            issue.setMilestone(milestoneRepository.findById(issueCreateRequest.getMilestoneId())
                    .orElseThrow(RuntimeException::new));
        }

        issue = issueRepository.save(issue);
        Comment comment = Comment.create(issue.getId(), author, issueCreateRequest.getComment());
        commentRepository.save(comment);

        return IssueWrapper.wrap(IssueResponse.fromEntity(issue, Collections.singletonList(comment)));
    }

    public IssueWrapper readIssueById(Long id) {
        Issue issue = issueRepository.findById(id).orElseThrow(RuntimeException::new);
        List<Comment> comments = commentRepository.findAllByIssueId(id);
        return IssueWrapper.wrap(IssueResponse.fromEntity(issue, comments));
    }

    @Transactional
    public IssueWrapper updateIssue (IssueRequest issueRequest, Long id) {
        Issue issue = issueRepository.findById(id).orElseThrow(RuntimeException::new);
        List<Comment> comments = commentRepository.findAllByIssueId(id);
        issue.updateIssue(issueRequest);
        return IssueWrapper.wrap(IssueResponse.fromEntity(issue, comments));
    }

    @Transactional
    public void addLabel(Long id, LabelIdRequest labelIdRequest) {
        Issue issue = issueRepository.findById(id).orElseThrow(RuntimeException::new);
        Label label = labelRepository.findById(labelIdRequest.getLabelId()).orElseThrow(RuntimeException::new);
        issue.addLabel(label);
    }

    @Transactional
    public void removeLabel(Long id, UUID labelId) {
        Issue issue = issueRepository.findById(id).orElseThrow(RuntimeException::new);
        Label label = labelRepository.findById(labelId).orElseThrow(RuntimeException::new);
        issue.removeLabel(label);
    }
}
