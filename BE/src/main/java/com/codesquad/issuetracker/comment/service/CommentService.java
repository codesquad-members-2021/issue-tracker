package com.codesquad.issuetracker.comment.service;

import com.codesquad.issuetracker.comment.domain.Comment;
import com.codesquad.issuetracker.comment.dto.CommentRequest;
import com.codesquad.issuetracker.comment.dto.CommentResponse;
import com.codesquad.issuetracker.comment.dto.CommentWrapper;
import com.codesquad.issuetracker.comment.infra.CommentRepository;
import com.codesquad.issuetracker.user.domain.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
public class CommentService {

    private final Logger logger = LoggerFactory.getLogger(CommentService.class);

    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Transactional
    public CommentWrapper createComment(CommentRequest commentRequest, User author) {
        Comment comment = commentRequest.toEntity(author);
        Comment savedComment = commentRepository.save(comment);
        return CommentWrapper.wrap(CommentResponse.fromEntity(savedComment));
    }

    @Transactional
    public CommentWrapper updateComment(CommentRequest commentRequest, UUID id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(RuntimeException::new);
        comment.updateContent(commentRequest);
        return CommentWrapper.wrap(CommentResponse.fromEntity(comment));
    }
}
