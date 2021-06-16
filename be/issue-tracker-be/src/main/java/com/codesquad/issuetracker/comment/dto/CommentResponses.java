package com.codesquad.issuetracker.comment.dto;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Data;

import java.util.List;

@Data(staticConstructor = "from")
public class CommentResponses {

    @JsonValue
    private final List<CommentResponse> commentResponses;
}
