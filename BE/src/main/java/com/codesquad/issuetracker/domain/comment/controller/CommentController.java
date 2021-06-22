package com.codesquad.issuetracker.domain.comment.controller;

import com.codesquad.issuetracker.domain.user.User;
import com.codesquad.issuetracker.domain.comment.request.CommentRequest;
import com.codesquad.issuetracker.domain.comment.request.EditedCommentRequest;
import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.domain.comment.service.CommentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
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
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse createComment(@RequestBody CommentRequest commentRequest, @RequestAttribute User user) {

        log.debug("Comment Request from User : {}", commentRequest);

        return ApiResponse.ok(commentService.create(commentRequest.create(user)));
    }

    @GetMapping("/{issueId}")
    public ApiResponse getComments(@PathVariable Long issueId) {
        return ApiResponse.ok(commentService.getComments(issueId));
    }

    @PutMapping("/{commentId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editComment(@PathVariable Long commentId, @RequestBody EditedCommentRequest content, @RequestAttribute User user) {
//        UserValidator.
        commentService.editComment(commentId, content);
    }

    @DeleteMapping("/{commentId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable Long commentId, @RequestAttribute User user) {
        commentService.removeComment(commentId);
    }

}
