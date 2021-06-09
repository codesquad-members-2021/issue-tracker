package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.ApiResponse;
import com.codesquad.issuetracker.request.CommentRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @PostMapping
    public ApiResponse createComment(@RequestBody CommentRequest commentRequest) {
        return ApiResponse.ok("Create Comment");
    }

    @GetMapping("/{issueId}")
    public ApiResponse getComments(@PathVariable Long issueId) {
        return ApiResponse.ok("Get Comments from Issue Number " + issueId);
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
