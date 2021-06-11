package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.request.CommentRequest;
import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.response.CommentResponse;
import com.codesquad.issuetracker.response.UserResponse;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @PostMapping
    public ApiResponse createComment(@RequestBody CommentRequest commentRequest) {
        return ApiResponse.ok("Create Comment");
    }

    @GetMapping("/{issueId}")
    public ApiResponse getComments(@PathVariable Long issueId) {
        CommentResponse commentOne = new CommentResponse(1L, "test comment 1", LocalDateTime.of(2021, 6, 8, 15, 0, 0), new UserResponse("bibi", "bibi6666667"));
        CommentResponse commentTwo = new CommentResponse(2L, "test comment 2", LocalDateTime.of(2021, 6, 8, 15, 0, 0), new UserResponse("bibi", "bibi6666667"));
        Set<CommentResponse> comments = new LinkedHashSet<>();
        comments.add(commentOne);
        comments.add(commentTwo);
        return ApiResponse.ok(comments);
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
