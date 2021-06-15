package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.domain.User;
import com.codesquad.issuetracker.request.CommentRequest;
import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.service.CommentService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/comment")
@Slf4j
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public ApiResponse createComment(@RequestBody CommentRequest commentRequest, @RequestAttribute User user) {

        log.debug("Comment Request from User : {}", commentRequest);

        commentService.create(commentRequest.create(user));
        return ApiResponse.ok("Create Comment");
    }

    @GetMapping("/{issueId}")
    public ApiResponse getComments(@PathVariable Long issueId) {
        return ApiResponse.ok(commentService.getComments(issueId));
    }

    @PutMapping("/{issueId}/{commentId}")
    public ApiResponse editComment(@PathVariable Long issueId, @PathVariable Long commentId) {
        return ApiResponse.ok("Edit Comment " + commentId + " from Issue Number " + issueId);
    }

    @DeleteMapping("/{issueId}/{commentId}")
    public ApiResponse deleteComment(@PathVariable Long issueId, @PathVariable Long commentId) {
        return ApiResponse.ok("Delete Comment " + commentId + " from Issue Number " + issueId);
    }

}
