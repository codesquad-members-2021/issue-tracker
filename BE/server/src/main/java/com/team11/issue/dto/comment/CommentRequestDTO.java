package com.team11.issue.dto.comment;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CommentRequestDTO {

    private Long authorId;
    private String authorName;
    private String contents;
}
