package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Comment;
import com.codesquad.issuetracker.repository.CommentRepository;
import com.codesquad.issuetracker.request.EditedComment;
import com.codesquad.issuetracker.response.CommentResponse;
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
        return CommentResponse.create(commentRepository.save(comment));
    }

    public List<CommentResponse> getComments(Long issueId) {
        return commentRepository.getCommentsByIssueId(issueId).stream()
                .map(CommentResponse::create)
                .collect(Collectors.toList());
    }

    @Transactional
    public void editComment(Long commentId, EditedComment content) {
        Comment comment = commentRepository.getById(commentId);
        comment.setContent(content.getContent());
        commentRepository.save(comment);
    }

    @Transactional
    public void removeComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }
}
