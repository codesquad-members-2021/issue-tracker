package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.domain.comment.dto.CommentRequest;
import com.codesqaude.cocomarco.domain.comment.dto.CommentResponseWrapper;
import com.codesqaude.cocomarco.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import static com.codesqaude.cocomarco.domain.user.User.SAMPLE_UUID;

@RestController
@RequestMapping("/issues/{issueId}/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping
    public CommentResponseWrapper show(@PathVariable Long issueId, Pageable pageable) {
        return commentService.showAll(issueId, pageable);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void make(@PathVariable Long issueId, @RequestBody CommentRequest commentRequest) {
        //todo user id
        commentService.create(issueId, SAMPLE_UUID, commentRequest);
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
