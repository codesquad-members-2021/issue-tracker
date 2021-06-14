package com.codesquad.issuetracker.comment.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class CommentsWrapper {

    private final List<CommentResponse> comments;

    public static CommentsWrapper wrap(List<CommentResponse> comments) {
        return new CommentsWrapper(comments);
    }
}
