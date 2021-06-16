package com.codesquad.issuetracker.response;

import com.codesquad.issuetracker.domain.Comment;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class CommentResponse {

    private final Long id;

    private String content;

    @JsonProperty("created_at")
    private final LocalDateTime createdAt;

    private UserResponse author;

    public static CommentResponse create(Comment comment) {
        return new CommentResponse(
                comment.getId(),
                comment.getContent(),
                comment.getCreatedAt(),
                UserResponse.create(comment.getUser())
        );
    }

}
