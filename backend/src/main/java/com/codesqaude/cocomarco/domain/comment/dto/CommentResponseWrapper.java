package com.codesqaude.cocomarco.domain.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CommentResponseWrapper {

    List<CommentResponse> comments;
}
