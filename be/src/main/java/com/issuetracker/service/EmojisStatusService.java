package com.issuetracker.service;

import com.issuetracker.domain.SelectedEmoji;
import com.issuetracker.dto.EmojiRequestDto;
import com.issuetracker.dto.EmojisStatusDto;
import com.issuetracker.dto.ResponseStatusDto;
import com.issuetracker.repository.EmojisStatusRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmojisStatusService {
    private EmojisStatusRepository emojisStatusRepository;

    public EmojisStatusService(EmojisStatusRepository emojisStatusRepository) {
        this.emojisStatusRepository = emojisStatusRepository;
    }

    public List<EmojisStatusDto> findEmojisStatus(Long issueId, Long commentId, Long userId) {
        if (issueId != null && commentId == null) {
            boolean rowIsPresent = emojisStatusRepository.hasRowByIssueIdAndUserId(issueId, userId);
            if (!rowIsPresent) {
                emojisStatusRepository.create(issueId, userId);
            }
            SelectedEmoji emojiStatus = emojisStatusRepository.findEmojisStatusByIssueIdAndUserId(issueId, userId);

            List<EmojisStatusDto> list = new ArrayList<>();
            list.add(new EmojisStatusDto(":thumbs_up:", emojiStatus.getThumbsUp()));
            list.add(new EmojisStatusDto(":heart_eyes:", emojiStatus.getHeartEyes()));

            return list;
        }

        if (issueId == null && commentId != null) {
            boolean rowIsPresent = emojisStatusRepository.hasRowByCommentIdAndUserId(commentId, userId);
            if (!rowIsPresent) {
                emojisStatusRepository.create(issueId, userId);
            }
            SelectedEmoji emojiStatus = emojisStatusRepository.findEmojisStatusByCommentIdAndUserId(issueId, userId);

            List<EmojisStatusDto> list = new ArrayList<>();
            list.add(new EmojisStatusDto(":thumbs_up:", emojiStatus.getThumbsUp()));
            list.add(new EmojisStatusDto(":heart_eyes", emojiStatus.getHeartEyes()));

            return list;
        }

        return null;
    }

    public ResponseStatusDto changeEmojiStatus(EmojiRequestDto emojiRequestDto) {
        boolean rowIsPresent = emojisStatusRepository.hasRowByCodeAndIssueId(emojiRequestDto);

        if (emojiRequestDto.getIssueId() != null && emojiRequestDto.getCommentId() == null) {
            return changeEmojiStatusWithIssueId(rowIsPresent, emojiRequestDto);
        }

        if (emojiRequestDto.getIssueId() == null && emojiRequestDto.getCommentId() != null) {
            return changeEmojiStatusWithCommentId(rowIsPresent, emojiRequestDto);
        }

        return null;
    }

    private ResponseStatusDto changeEmojiStatusWithCommentId(boolean rowIsPresent, EmojiRequestDto emojiRequestDto) {
        if (rowIsPresent) {
            if (emojiRequestDto.getSelected()) {
                emojisStatusRepository.increaseCountByOneByCodeAndCommentId(emojiRequestDto);
            }
            if (!emojiRequestDto.getSelected()) {
                emojisStatusRepository.decreaseCountByOneByCodeAndCommentId(emojiRequestDto);
            }
        }

        if (!rowIsPresent) {
            emojisStatusRepository.insertEmojiStatusByCodeAndCommentId(emojiRequestDto);
            emojisStatusRepository.increaseCountByOneByCodeAndCommentId(emojiRequestDto);
        }
        return new ResponseStatusDto("success");
    }

    private ResponseStatusDto changeEmojiStatusWithIssueId(boolean rowIsPresent, EmojiRequestDto emojiRequestDto) {
        if (rowIsPresent) {
            if (emojiRequestDto.getSelected()) {
                emojisStatusRepository.increaseCountByOneByCodeAndIssueId(emojiRequestDto);
            }
            if (!emojiRequestDto.getSelected()) {
                emojisStatusRepository.decreaseCountByOneByCodeAndIssueId(emojiRequestDto);
            }
        }

        if (!rowIsPresent) {
            emojisStatusRepository.insertEmojiStatusByCodeAndIssueId(emojiRequestDto);
            emojisStatusRepository.increaseCountByOneByCodeAndIssueId(emojiRequestDto);
        }
        return new ResponseStatusDto("success");
    }
}
