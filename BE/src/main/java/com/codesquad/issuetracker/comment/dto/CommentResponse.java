package com.codesquad.issuetracker.comment.dto;

import com.codesquad.issuetracker.comment.domain.Comment;
import com.codesquad.issuetracker.user.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@AllArgsConstructor
public class CommentResponse {

    private final UUID id;

    private final Long issueId;

    private final UserDto author;

    private final LocalDateTime createdAt;

    private final String content;

    public static CommentResponse fromEntity (Comment comment) {
        return new CommentResponse(comment.getId(),
                comment.getIssueId(),
                UserDto.fromEntity(comment.getAuthor()),
                comment.getCreatedAt(),
                comment.getContent()
        );
    }
}
