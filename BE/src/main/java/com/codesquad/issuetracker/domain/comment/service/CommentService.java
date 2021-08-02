package com.codesquad.issuetracker.domain.comment.service;

import com.codesquad.issuetracker.domain.comment.Comment;
import com.codesquad.issuetracker.domain.comment.CommentRepository;
import com.codesquad.issuetracker.domain.comment.request.EditedCommentRequest;
import com.codesquad.issuetracker.domain.comment.response.CommentResponse;
import com.codesquad.issuetracker.domain.user.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class CommentService {

    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Transactional
    public CommentResponse create(Comment comment) {
        return CommentResponse.from(commentRepository.save(comment));
    }

    public List<CommentResponse> getComments(Long issueId) {
        return commentRepository.getCommentsByIssueId(issueId).stream()
                .map(CommentResponse::from)
                .collect(Collectors.toList());
    }

    @Transactional
    public void editComment(Long commentId, EditedCommentRequest content, User loginUser) {
        Comment comment = commentRepository.getById(commentId);
        loginUser.validateUser(comment.getUser());

        comment.setContent(content.getContent());
        commentRepository.save(comment);
    }

    @Transactional
    public void removeComment(Long commentId, User loginUser) {
        Comment comment = commentRepository.getById(commentId);
        loginUser.validateUser(comment.getUser());

        commentRepository.deleteById(commentId);
    }
}
