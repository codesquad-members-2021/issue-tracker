package com.codesquad.issuetracker.comment.domain;

import com.codesquad.issuetracker.comment.dto.CommentRequest;
import com.codesquad.issuetracker.user.domain.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Comment {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)", name = "COMMENT_ID")
    private UUID id;

    //Foreign Key constraint
    @Column(name = "ISSUE_ID")
    private Long issueId;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    @NonNull
    private User author;

    @Column(name = "COMMENT_CREATED_AT", nullable = false)
    private LocalDateTime createdAt;

    @Lob
    @Column(name = "COMMENT_CONTENT", nullable = false)
    @NonNull
    private String content;

    private Comment(Long issueId, User author, String content) {
        this.issueId = issueId;
        this.author = author;
        this.content = content;
        this.createdAt = LocalDateTime.now();
    }

    public static Comment create(Long issueId, User author, String content) {
        return new Comment(issueId, author, content);
    }

    public void updateContent(CommentRequest commentRequest) {
        this.content = commentRequest.getContent();
    }
}
