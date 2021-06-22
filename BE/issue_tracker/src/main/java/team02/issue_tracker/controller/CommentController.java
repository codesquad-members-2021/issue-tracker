package team02.issue_tracker.controller;

import org.springframework.web.bind.annotation.*;
import team02.issue_tracker.dto.CommentEmojiRequest;
import team02.issue_tracker.dto.CommentRequest;
import team02.issue_tracker.dto.EmojiResponse;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.service.CommentService;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/{commentId}/emojis")
    public ApiResult<String> addEmojiOnComment(@PathVariable Long commentId, @RequestBody CommentEmojiRequest commentEmojiRequest) {
        commentService.addEmoji(commentId, commentEmojiRequest);
        return ApiResult.ok();
    }

    @PatchMapping("/{commentId}")
    public ApiResult<String> modifyComment(@PathVariable Long commentId, @RequestBody CommentRequest commentRequest) {
        commentService.modifyComment(commentId, commentRequest);
        return ApiResult.ok();
    }

    @GetMapping("/emojis")
    public ApiResult<List<EmojiResponse>> showAllEmojis() {
        return ApiResult.success(commentService.getAllEmojiResponses());
    }
}
