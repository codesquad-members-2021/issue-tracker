package com.team11.issue.dto.comment;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
@Builder
@Getter
public class CommentsResponseDTO {

    private final List<CommentResponseDTO> comments;

    public static CommentsResponseDTO from(List<CommentResponseDTO> commentResponseDTOS) {
        return CommentsResponseDTO.builder()
                .comments(commentResponseDTOS)
                .build();
    }
}
