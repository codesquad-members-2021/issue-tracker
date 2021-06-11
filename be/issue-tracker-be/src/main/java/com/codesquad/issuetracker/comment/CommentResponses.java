package com.codesquad.issuetracker.comment;

import lombok.Data;

import java.util.List;

@Data(staticConstructor = StaticConstructorNames.SINGLE_PARAMETER)
public class CommentResponses {
    private final List<CommentResponse> commentResponses;
}
