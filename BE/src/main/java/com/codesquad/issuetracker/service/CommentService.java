package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Comment;
import com.codesquad.issuetracker.repository.CommentRepository;
import com.codesquad.issuetracker.request.EditedComment;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class CommentService {

    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Transactional
    public void create(Comment comment) {
        commentRepository.save(comment);
    }

    public List<Comment> getComments(Long issueId) {
        return commentRepository.getCommentsByIssueId(issueId);
    }

    @Transactional
    public void editComment(Long commentId, EditedComment content) {
        Comment comment = commentRepository.getById(commentId);
        comment.setContent(content.getContent());
        commentRepository.save(comment);
    }
}
