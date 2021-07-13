package com.issuetracker.domain.elasticsearch;

import com.issuetracker.domain.comment.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class CommentDocument {

    @Id
    private Long id;
    private String comment;

    public static CommentDocument of(Comment comment) {
        return CommentDocument.builder()
                .comment(comment.getComment())
                .build();
    }

    public static List<CommentDocument> commentsToCommentDocuments(List<Comment> comments) {
        return comments.stream()
                .map(CommentDocument::of)
                .collect(Collectors.toList());
    }
}
