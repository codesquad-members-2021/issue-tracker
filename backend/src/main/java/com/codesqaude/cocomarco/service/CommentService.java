package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.common.exception.NotFoundCommentException;
import com.codesqaude.cocomarco.common.exception.NotFoundIssueException;
import com.codesqaude.cocomarco.common.exception.NotFoundUserException;
import com.codesqaude.cocomarco.domain.comment.Comment;
import com.codesqaude.cocomarco.domain.comment.CommentRepository;
import com.codesqaude.cocomarco.domain.comment.dto.CommentRequest;
import com.codesqaude.cocomarco.domain.comment.dto.CommentResponse;
import com.codesqaude.cocomarco.domain.comment.dto.CommentResponseWrapper;
import com.codesqaude.cocomarco.domain.issue.IssueRepository;
import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.domain.user.User;
import com.codesqaude.cocomarco.domain.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Transactional(readOnly = true)
public class CommentService {

    private final CommentRepository commentRepository;
    private final IssueRepository issueRepository;
    private final UserRepository userRepository;

    @Transactional
    public void create(Long issueId, UUID writerId, CommentRequest commentRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(NotFoundIssueException::new);
        User writer = userRepository.findById(writerId).orElseThrow(NotFoundUserException::new);
        Comment comment = new Comment(issue, writer, commentRequest.getText());
        commentRepository.save(comment);
    }

    @Transactional
    public void modify(UUID writerId, CommentRequest commentRequest, Long commentId) {
        Comment comment = show(commentId);
        comment.isSameWriter(writerId);
        comment.modify(commentRequest.getText());
    }

    @Transactional
    public void delete(UUID writerId, Long commentId) {
        Comment comment = show(commentId);
        comment.isSameWriter(writerId);
        commentRepository.delete(comment);
    }

    public CommentResponseWrapper showAll(Long issueId, Pageable pageable) {
        List<Comment> comments = commentRepository.findAllByIssueId(issueId, pageable);
        List<CommentResponse> commentResponses = comments.stream()
                .map(CommentResponse::of)
                .collect(Collectors.toList());
        return new CommentResponseWrapper(commentResponses);
    }

    public Comment show(Long id) {
        return commentRepository.findById(id).orElseThrow(NotFoundCommentException::new);
    }


}
