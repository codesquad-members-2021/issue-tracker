package com.issuetracker.service;

import com.issuetracker.domain.SelectedEmoji;
import com.issuetracker.dto.EmojisStatusDto;
import com.issuetracker.repository.EmojisStatusRepository;
import org.springframework.stereotype.Service;

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
            boolean row = emojisStatusRepository.hasRowByIssueIdAndUserId(issueId, userId);
            if (!row) {
                emojisStatusRepository.create(issueId, userId);
            }
            SelectedEmoji emojiStatus = emojisStatusRepository.findEmojisStatusByIssueIdAndUserId(issueId, userId);

            List<EmojisStatusDto> list = new ArrayList<>();
            list.add(new EmojisStatusDto(":thumbs_up:", emojiStatus.getThumbsUp()));
            list.add(new EmojisStatusDto(":heart_eyes:", emojiStatus.getHeartEyes()));

            return list;
        }

        if (issueId == null && commentId != null) {
            boolean row = emojisStatusRepository.hasRowByCommentIdAndUserId(commentId, userId);
            if (!row) {
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
}
