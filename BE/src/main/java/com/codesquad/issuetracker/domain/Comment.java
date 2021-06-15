package com.codesquad.issuetracker.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private LocalDateTime createdAt;
    private Long issueId;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    private Comment(Long id, String content, LocalDateTime createdAt, Long issueId, User user) {
        this.id = id;
        this.content = content;
        this.createdAt = createdAt;
        this.issueId = issueId;
        this.user = user;
    }

    public static Comment create(Long id, String content, LocalDateTime createdAt, Long issueId, User user) {
        return new Comment(id, content, createdAt, issueId, user);
    }
}
