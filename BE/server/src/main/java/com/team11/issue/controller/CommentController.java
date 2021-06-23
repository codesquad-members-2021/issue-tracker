package com.team11.issue.controller;

import com.team11.issue.dto.ResponseDTO;
import com.team11.issue.dto.comment.CommentRequestDTO;
import com.team11.issue.service.CommentService;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;
    private final Logger logger = LoggerFactory.getLogger(CommentController.class);

    @PostMapping("/issue/{issueId}/comment")
    public ResponseEntity<ResponseDTO> createComment(@PathVariable Long issueId,
                                                     @ApiParam(hidden = true) @RequestAttribute String userName,
                                                     @RequestBody CommentRequestDTO commentRequestDTO) {
        logger.info("코멘트 등록 요청");
        commentService.createComment(issueId, userName, commentRequestDTO);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

    @PutMapping("/issue/{issueId}/comment/{commentId}")
    public ResponseEntity<ResponseDTO> updateComment(@PathVariable Long issueId,
                                                     @PathVariable Long commentId,
                                                     @ApiParam(hidden = true) @RequestAttribute String userName,
                                                     @RequestBody CommentRequestDTO commentRequestDTO) {
        logger.info("코멘트 수정 요청");
        commentService.updateComment(issueId, commentId, userName, commentRequestDTO);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

    @DeleteMapping("/issue/{issueId}/comment/{commentId}")
    public ResponseEntity<ResponseDTO> deleteComment(@PathVariable Long issueId,
                                                     @PathVariable Long commentId,
                                                     @ApiParam(hidden = true) @RequestAttribute String userName) {
        logger.info("코멘트 삭제 요청");
        commentService.deleteComment(issueId, commentId, userName);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }
}
