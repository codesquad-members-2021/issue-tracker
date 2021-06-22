package com.codesquad.issuetracker.comment.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class CommentWrapper {

    private final CommentResponse comment;

    public static CommentWrapper wrap(CommentResponse comment) {
        return new CommentWrapper(comment);
    }
}
