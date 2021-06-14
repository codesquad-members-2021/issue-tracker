package com.codesquad.issuetracker.comment.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data(staticConstructor = "from")
public class CommentResponses {

    @JsonProperty("comments")
    private final List<CommentResponse> commentResponses;
}
