package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.domain.comment.dto.CommentRequest;
import com.codesqaude.cocomarco.service.CommentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/issues/{issueId}/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public void makeComment(@PathVariable Long issueId, @RequestBody CommentRequest commentRequest) {
        //todo user id
        commentService.write(issueId, "uuid", commentRequest);
    }

    @PutMapping("/{commentId}")
    public void modifyComment(@PathVariable Long issueId,
                              @PathVariable Long commentId,
                              @RequestBody CommentRequest commentRequest) {
        //todo user id
        commentService.modify("uuid", commentRequest, commentId);
    }

}
