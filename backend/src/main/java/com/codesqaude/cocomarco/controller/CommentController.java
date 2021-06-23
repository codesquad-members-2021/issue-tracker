package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.common.auth.Auth;
import com.codesqaude.cocomarco.common.auth.UserId;
import com.codesqaude.cocomarco.domain.comment.dto.CommentRequest;
import com.codesqaude.cocomarco.domain.comment.dto.CommentResponseWrapper;
import com.codesqaude.cocomarco.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/issues/{issueId}/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping
    public CommentResponseWrapper show(@PathVariable Long issueId, Pageable pageable) {
        return commentService.showAll(issueId, pageable);
    }

    @Auth
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void make(@PathVariable Long issueId, @RequestBody CommentRequest commentRequest, @UserId UUID userId) {
        commentService.create(issueId, userId, commentRequest);
    }

    @Auth
    @PutMapping("/{commentId}")
    public void modify(@PathVariable Long issueId,
                       @PathVariable Long commentId,
                       @RequestBody CommentRequest commentRequest, @UserId UUID userId) {
        commentService.modify(userId, commentRequest, commentId);
    }

    @Auth
    @DeleteMapping("/{commentId}")
    public void delete(@PathVariable Long issueId,
                       @PathVariable Long commentId, @UserId UUID userId) {
        commentService.delete(userId, commentId);
    }
}
