package com.codesquad.issuetracker.comment.dto;

import com.codesquad.issuetracker.comment.vo.Emojis;
import com.codesquad.issuetracker.user.dto.UserResponse;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

@Data
@EqualsAndHashCode(of = {"id"})
@Builder
public class CommentResponse {
    private Long id;
    private UserResponse author;
    private String contents;
    private LocalDateTime createDateTime;

    @JsonUnwrapped
    private Emojis emojis;
}
