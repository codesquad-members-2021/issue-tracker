package com.codesqaude.cocomarco.domain.comment.dto;

import lombok.Getter;

@Getter
public class CommentRequest {

    private String text;

    public CommentRequest(String text) {
        this.text = text;
    }
}
