package com.codesquad.issuetracker.domain.comment.response;

import com.codesquad.issuetracker.domain.comment.Comment;
import com.codesquad.issuetracker.domain.user.response.UserResponse;
import com.fasterxml.jackson.annotation.JsonFormat;
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
    @JsonFormat(pattern = "yyyy-MM-dd kk:mm:ss")
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
