package team02.issue_tracker.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import team02.issue_tracker.domain.Comment;
import team02.issue_tracker.domain.CommentEmoji;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class CommentResponse {

    private Long id;
    private UserResponse writer;
    private String content;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdTime;

    private List<EmojiResponse> emojis;
    private String file;

    public CommentResponse(Comment comment) {
        this.id = comment.getId();
        this.writer = new UserResponse(comment.getWriter());
        this.content = comment.getContent();
        this.createdTime = comment.getCreatedTime();
        this.emojis = toEmojiResponses(comment.getCommentEmojis());
        this.file = comment.getFile();
    }

    private List<EmojiResponse> toEmojiResponses(List<CommentEmoji> emojis) {
        return emojis.stream()
                .map(CommentEmoji::getEmoji)
                .map(EmojiResponse::new)
                .collect(Collectors.toList());
    }
}
