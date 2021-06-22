package com.issuetracker.controller;

import com.issuetracker.dto.*;
import com.issuetracker.oauth.User;
import com.issuetracker.service.CommentService;
import com.issuetracker.service.IssueService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/issues/{issueId}/comments")
    public List<CommentDto> viewCommentsByIssueId(@PathVariable Long issueId) {
        return commentService.findCommentsByIssueId(issueId);
    }

    @PostMapping("/issues/{issueId}/comments")
    public ResponseStatusDto createComment(@PathVariable Long issueId,
                                           @RequestBody CommentRequestDto requestDto,
                                           @RequestAttribute User user) {
        return commentService.saveComment(requestDto.getDescription(), issueId, user.getId());
    }

    @PatchMapping("/issues/{issueId}/comments/{commentId}")
    public ResponseStatusDto editComment(@PathVariable Long issueId,
                                         @PathVariable Long commentId,
                                         @RequestBody CommentRequestDto requestDto,
                                         @RequestAttribute User user) {
        return commentService.editComment(requestDto.getDescription(), issueId, user.getId(), commentId);
    }

    @DeleteMapping("/issues/{issueId}/comments/{commentId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable Long issueId,
                              @PathVariable Long commentId,
                              @RequestAttribute User user) {

        commentService.deleteComment(issueId, user.getId(), commentId);
    }

    @GetMapping("/comments")
    public List<CommentDto> viewCommentsByUserId(@RequestParam(name = "user_id") Long userId) {
        return commentService.findCommentsByUserId(userId);
    }
}
