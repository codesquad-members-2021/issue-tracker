package team02.issue_tracker.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;
import team02.issue_tracker.dto.CommentEmojiRequest;
import team02.issue_tracker.dto.CommentRequest;
import team02.issue_tracker.dto.EmojiResponse;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.service.CommentService;

import java.util.List;

@Api(tags = {"코멘트 관련 API"}, description = "코멘트 수정, 이모지 조회, 이모지 추가 가능합니다.")
@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @ApiOperation(value = "코멘트에 이모지 추가", notes = "코멘트에 이모지를 추가합니다.")
    @PostMapping("/{commentId}/emojis")
    public ApiResult<String> addEmojiOnComment(@PathVariable Long commentId, @RequestBody CommentEmojiRequest commentEmojiRequest) {
        commentService.addEmoji(commentId, commentEmojiRequest);
        return ApiResult.ok();
    }

    @ApiOperation(value = "코멘트 수정", notes = "코멘트를 수정합니다.")
    @PatchMapping("/{commentId}")
    public ApiResult<String> modifyComment(@PathVariable Long commentId, @RequestBody CommentRequest commentRequest) {
        commentService.modifyComment(commentId, commentRequest);
        return ApiResult.ok();
    }

    @ApiOperation(value = "이모지 조회", notes = "이모지를 전체 조회합니다.")
    @GetMapping("/emojis")
    public ApiResult<List<EmojiResponse>> showAllEmojis() {
        return ApiResult.success(commentService.getAllEmojiResponses());
    }
}
