package com.team11.issue.dto.comment;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.team11.issue.domain.Comment;
import com.team11.issue.dto.user.UserResponseDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@JsonPropertyOrder({"commentId", "author", "contents", "createDateTime"})
@RequiredArgsConstructor
@Builder
@Getter
public class CommentResponseDTO {

    private final Long commentId;
    private final UserResponseDTO author;
    private final String contents;
    private final LocalDateTime createDateTime;

    public static CommentResponseDTO from(Comment comment) {
        return CommentResponseDTO.builder()
                .commentId(comment.getId())
                .author(UserResponseDTO.from(comment.getUser()))
                .contents(comment.getContents())
                .createDateTime(comment.getCreateDateTime())
                .build();
    }
}
