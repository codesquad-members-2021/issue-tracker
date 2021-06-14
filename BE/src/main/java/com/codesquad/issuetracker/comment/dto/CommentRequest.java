package com.codesquad.issuetracker.comment.dto;

import com.codesquad.issuetracker.comment.domain.Comment;
import com.codesquad.issuetracker.user.domain.User;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Getter
@RequiredArgsConstructor
public class CommentRequest {

    private final UUID id;

    private final String content;

    private final Long issueId;

    public Comment toEntity(User author) {
        return Comment.create(issueId, author, content);
    }
}
