package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.domain.comment.dto.CommentRequest;
import com.codesqaude.cocomarco.domain.comment.dto.CommentResponseWrapper;
import com.codesqaude.cocomarco.service.CommentService;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/issues/{issueId}/comments")
public class CommentController {

    private static final String SAMPLE_UUID = "3eb62438-9604-45f9-a183-b838d2123793";
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public CommentResponseWrapper show(@PathVariable Long issueId, Pageable pageable) {
        return commentService.showAll(issueId, pageable);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void make(@PathVariable Long issueId, @RequestBody CommentRequest commentRequest) {
        //todo user id
        commentService.write(issueId, SAMPLE_UUID, commentRequest);
    }

    @PutMapping("/{commentId}")
    public void modify(@PathVariable Long issueId,
                       @PathVariable Long commentId,
                       @RequestBody CommentRequest commentRequest) {
        //todo user id
        commentService.modify(SAMPLE_UUID, commentRequest, commentId);
    }

    @DeleteMapping("/{commentId}")
    public void delete(@PathVariable Long issueId,
                       @PathVariable Long commentId) {
        //todo user id
        commentService.delete(SAMPLE_UUID, commentId);
    }

}
