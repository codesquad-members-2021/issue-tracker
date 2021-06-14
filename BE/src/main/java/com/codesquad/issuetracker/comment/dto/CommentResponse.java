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

    private UUID id;

    private Long issueId;

    private UserDto author;

    private LocalDateTime createdAt;

    private String content;

    public static CommentResponse fromEntity (Comment comment) {
        return new CommentResponse(comment.getId(),
                comment.getIssueId(),
                UserDto.fromEntity(comment.getAuthor()),
                comment.getCreatedAt(),
                comment.getContent()
        );
    }
}
