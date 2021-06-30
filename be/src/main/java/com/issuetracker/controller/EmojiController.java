package com.issuetracker.controller;

import com.issuetracker.dto.EmojisStatusDto;
import com.issuetracker.service.EmojisStatusService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/emojis")
public class EmojiController {
    private EmojisStatusService emojisStatusService;

    public EmojiController(EmojisStatusService emojisStatusService) {
        this.emojisStatusService = emojisStatusService;
    }

    @GetMapping
    public List<EmojisStatusDto> emojiStatus(@RequestParam(name = "issue_id", required = false) Long issueId,
                                             @RequestParam(name = "comment_id", required = false) Long commentId,
                                             @RequestParam(name = "user_id") Long userId) {
        return emojisStatusService.findEmojisStatus(issueId, commentId, userId);
    }

}
