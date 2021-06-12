package com.codesquad.issuetracker.comment;

import lombok.Data;

import java.util.List;

@Data(staticConstructor = "from")
public class CommentResponses {
    private final List<CommentResponse> commentResponses;
}
