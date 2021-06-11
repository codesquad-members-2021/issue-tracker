package com.codesqaude.cocomarco.domain.comment.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CommentRequest {

    private String text;

    public CommentRequest(String text) {
        this.text = text;
    }
}
