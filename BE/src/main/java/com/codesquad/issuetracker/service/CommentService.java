package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Comment;
import com.codesquad.issuetracker.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public void create(Comment comment){
        commentRepository.save(comment);
    }

    public List<Comment> getComments(Long issueId) {
        return commentRepository.getCommentsByIssueId(issueId);
    }

}
