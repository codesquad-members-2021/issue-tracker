package com.codesquad.issuetracker.comment.controller;

import com.codesquad.issuetracker.comment.dto.CommentRequest;
import com.codesquad.issuetracker.comment.dto.CommentWrapper;
import com.codesquad.issuetracker.comment.service.CommentService;
import com.codesquad.issuetracker.user.domain.User;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public CommentWrapper createComment(@RequestBody CommentRequest commentRequest, @RequestAttribute User author) {
        return commentService.createComment(commentRequest, author);
    }

    @PutMapping("/{id}")
    public CommentWrapper updateComment(@RequestBody CommentRequest commentRequest, @PathVariable UUID id) {
        return commentService.updateComment(commentRequest, id);
    }
}
