package com.codesqaude.cocomarco.domain.comment.dto;

import com.codesqaude.cocomarco.domain.comment.Comment;
import com.codesqaude.cocomarco.domain.user.User;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class CommentResponse {

    private String id;
    private String avatarImage;
    private String name;
    private LocalDateTime writeTime;
    private String text;

    public static CommentResponse of(Comment comment) {
        User writer = comment.getWriter();
        return new CommentResponse(writer.getId().toString(), writer.getAvatarImage(), writer.getName(),
                comment.getWritingTime(), comment.getText());
    }
}
