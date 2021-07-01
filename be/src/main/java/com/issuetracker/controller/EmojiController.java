package com.issuetracker.controller;

import com.issuetracker.dto.EmojiRequestDto;
import com.issuetracker.dto.EmojisStatusDto;
import com.issuetracker.dto.ResponseStatusDto;
import com.issuetracker.service.EmojisStatusService;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping
    public ResponseStatusDto changeEmojiStatus(@RequestBody EmojiRequestDto emojiRequestDto) {
        return emojisStatusService.changeEmojiStatus(emojiRequestDto);
    }

}
