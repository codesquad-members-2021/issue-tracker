package com.codesquad.issuetracker.comment;

import com.codesquad.issuetracker.user.UserResponse;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Data
@Builder
public class CommentResponse {
    private Long id;
    private UserResponse author;
    private String contents;
    private LocalDateTime createDateTime;
    private Set<Emoji> emojis;
}
