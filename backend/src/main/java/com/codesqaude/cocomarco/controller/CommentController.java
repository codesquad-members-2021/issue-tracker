package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.domain.comment.dto.CommentRequest;
import com.codesqaude.cocomarco.service.CommentService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/issues/{issueId}/comments")
    public void makeComment(@PathVariable Long issueId, CommentRequest commentRequest){
        //todo user id
        commentService.write(issueId,"uuid",commentRequest);
    }
}
