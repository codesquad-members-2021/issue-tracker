package com.codesquad.issuetracker.domain.issue.service;

import com.codesquad.issuetracker.domain.assignee.Assignee;
import com.codesquad.issuetracker.domain.assignee.response.AssigneeForIssueResponse;
import com.codesquad.issuetracker.domain.assignee.AssigneeRepository;
import com.codesquad.issuetracker.domain.comment.Comment;
import com.codesquad.issuetracker.domain.comment.CommentRepository;
import com.codesquad.issuetracker.domain.comment.response.CommentResponse;
import com.codesquad.issuetracker.domain.issue.*;
import com.codesquad.issuetracker.domain.issue.request.IssueRequest;
import com.codesquad.issuetracker.domain.issue.response.IssueResponse;
import com.codesquad.issuetracker.domain.label.Label;
import com.codesquad.issuetracker.domain.label.LabelRepository;
import com.codesquad.issuetracker.domain.label.response.LabelResponse;
import com.codesquad.issuetracker.domain.milestone.Milestone;
import com.codesquad.issuetracker.domain.milestone.response.MilestoneForIssueResponse;
import com.codesquad.issuetracker.domain.milestone.MilestoneRepository;
import com.codesquad.issuetracker.domain.user.User;
import com.codesquad.issuetracker.domain.user.response.UserResponse;
import com.codesquad.issuetracker.exception.NoSuchIssueException;
import com.codesquad.issuetracker.domain.assignee.request.AssigneeRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Slf4j
@Service
public class IssueService {

    private final IssueRepository issueRepository;
    private final IssueRepositorySupport issueRepositorySupport;
    private final LabelRepository labelRepository;
    private final IssueLabelRepository issueLabelRepository;
    private final MilestoneRepository milestoneRepository;
    private final AssigneeRepository assigneeRepository;
    private final CommentRepository commentRepository;

    public IssueService(IssueRepository issueRepository, IssueRepositorySupport issueRepositorySupport,
                        LabelRepository labelRepository,
                        IssueLabelRepository issueLabelRepository, MilestoneRepository milestoneRepository,
                        AssigneeRepository assigneeRepository, CommentRepository commentRepository) {
        this.issueRepository = issueRepository;
        this.issueRepositorySupport = issueRepositorySupport;
        this.labelRepository = labelRepository;
        this.issueLabelRepository = issueLabelRepository;
        this.milestoneRepository = milestoneRepository;
        this.assigneeRepository = assigneeRepository;
        this.commentRepository = commentRepository;
    }


    public List<IssueResponse> getFilteredIssues(IssueFilter issueFilter) {
        return convertToResponse.apply(issueRepositorySupport.getFilteredIssues(issueFilter));
    }

    public List<IssueResponse> getOpenedIssues() {
        return convertToResponse.apply(issueRepositorySupport.findByStatusTrue());
    }

    public List<IssueResponse> getClosedIssues() {
        return convertToResponse.apply(issueRepositorySupport.findByStatusFalse());
    }

    public List<IssueResponse> getIssuesByTitle(String title) {
        return convertToResponse.apply(issueRepositorySupport.findByTitle(title));
    }

    public List<IssueResponse> getIssuesByAuthor(Long authorId) {
        return convertToResponse.apply(issueRepositorySupport.findByAuthor(authorId));
    }

    public List<IssueResponse> getIssuesByAssignee(Long userId) {
        return convertToResponse.apply(issueRepositorySupport.findByAssignee(userId));
    }

    public List<IssueResponse> getIssuesByComment(Long userId) {
        return convertToResponse.apply(issueRepositorySupport.findByCommentUserId(userId));
    }

    private Function<List<Issue>, List<IssueResponse>> convertToResponse =
            issues -> issues.stream()
                    .map(this::issueToIssueResponse)
                    .collect(Collectors.toList());


    public IssueResponse getIssue(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        return issueToIssueResponse(issue);
    }

    public IssueResponse addIssue(IssueRequest issueRequest) {
        Issue savedIssue = issueRepository.save(Issue.issueRequestToIssue(issueRequest));
        List<Long> labelIdList = issueRequest.getLabelList();
        for (Long labelId : labelIdList) {
            issueLabelRepository.save(new IssueLabel(savedIssue, labelRepository.findById(labelId).orElseThrow(NoSuchElementException::new)));
        }
        List<AssigneeRequest> assigneeRequestList = issueRequest.getAssigneeList();
        for (AssigneeRequest assigneeRequest : assigneeRequestList) {
            Assignee assignee = new Assignee(savedIssue.getId(), assigneeRequest.getUserId());
            assigneeRepository.save(assignee);
        }
        return issueToIssueResponse(savedIssue);
    }

    public void updateTitle(Long issueId, IssueRequest issueRequest, User loginUser) {
        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        loginUser.validateUser(updateIssue.getUser());

        updateIssue.setTitle(issueRequest.getTitle());
        issueRepository.save(updateIssue);
    }

    @Transactional
    public void updateAssignee(Long issueId, IssueRequest issueRequest, User loginUser) {
        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        loginUser.validateUser(updateIssue.getUser());

        assigneeRepository.deleteAssigneesByIssueId(issueId);
        ArrayList<AssigneeRequest> assigneeList = issueRequest.getAssigneeList();
        for (AssigneeRequest assigneeRequest : assigneeList) {
            assigneeRepository.save(Assignee.assigneeRequestToassignee(issueId, assigneeRequest));
        }
    }

    public void updateContent(Long issueId, IssueRequest issueRequest, User loginUser) {
        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        loginUser.validateUser(updateIssue.getUser());

        updateIssue.setContent(issueRequest.getContent());
        issueRepository.save(updateIssue);
    }

    public void updateStatus(Long issueId, IssueRequest issueRequest, User loginUser) {
        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        loginUser.validateUser(updateIssue.getUser());

        updateIssue.setOpen(issueRequest.isStatus());
        issueRepository.save(updateIssue);
    }

    @Transactional
    public void updateLabel(Long issueId, IssueRequest issueRequest, User loginUser) {
        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        loginUser.validateUser(updateIssue.getUser());

        List<Long> labelIdsBeEdited = issueLabelRepository.findIssueLabelsLabelIdByIssueId(issueId); // 원본
        ArrayList<Long> labelIdsToEdit = issueRequest.getLabelList(); // 요청 (수정할것)
        for (Long labelId : labelIdsToEdit) {
            if (labelIdsBeEdited.contains(labelId)) { // 원본에 요청항목이 존재하면 넘어감 (추가/삭제 필요 x)
                continue;
            }
            if (!labelIdsBeEdited.contains(labelId)) { // 원본에 수정할 항목이 없으면 추가함
                IssueLabel issueLabel = IssueLabel.issueToIssueLabel(issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new),
                        labelRepository.findById(labelId).orElseThrow(NoSuchElementException::new));
                issueLabelRepository.save(issueLabel);
            }
        }
        for (int i = 0; i < labelIdsBeEdited.size(); i++) { // 수정 항목 중 원본에만 있는 것은 삭제함
            if (!labelIdsToEdit.contains(labelIdsBeEdited.get(i))) {
                issueLabelRepository.deleteIssueLabelByIssueIdAndLabelId(issueId, labelIdsBeEdited.get(i));
            }
        }
    }

    public void updateMilestone(Long issueId, IssueRequest issueRequest, User loginUser) {
        Issue updateIssue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        loginUser.validateUser(updateIssue.getUser());

        updateIssue.setMilestoneId(issueRequest.getMilestoneId());
        issueRepository.save(updateIssue);
    }

    public void deleteIssue(Long issueId, User loginUser) {
        Issue issueToDelete = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        loginUser.validateUser(issueToDelete.getUser());

        issueRepository.deleteById(issueId);
    }

    private Set<Label> getLabelsForIssue(Long issueId) {
        return labelRepository.findByIssueId(issueId);
    }

    private IssueResponse issueToIssueResponse(Issue issue) {
        return new IssueResponse(issue.getId(), issue.getTitle(), issue.getContent(), issue.isOpen(),
                issue.getCreatedAt(), makeUserResponses(issue.getUser()),
                makeMilestoneForIssueResponse(issue.getMilestoneId()), makeLabelResponses(issue.getId()),
                makeAssigneeForIssueResponse(issue.getId()), makeCommentResponse(issue.getId()));
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
        return UserResponse.create(user);
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

    private Set<CommentResponse> makeCommentResponse(Long issueId) {
        List<Comment> comments = commentRepository.getCommentsByIssueId(issueId);
        Set<CommentResponse> result = new HashSet<>();
        for (Comment comment : comments) {
            result.add(CommentResponse.from(comment));
        }
        return result;
    }

}
