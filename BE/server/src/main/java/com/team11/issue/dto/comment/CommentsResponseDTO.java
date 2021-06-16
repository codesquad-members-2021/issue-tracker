package com.team11.issue.dto.comment;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor(staticName = "of")
@Builder
@Getter
public class CommentsResponseDTO {

    private final List<CommentResponseDTO> comments = new ArrayList<>();
}
