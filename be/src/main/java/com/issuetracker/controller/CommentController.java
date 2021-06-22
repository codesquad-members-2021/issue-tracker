package com.issuetracker.controller;

import com.issuetracker.dto.CommentDto;
import com.issuetracker.dto.IssueDto;
import com.issuetracker.dto.IssueSearchCondition;
import com.issuetracker.service.CommentService;
import com.issuetracker.service.IssueService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
