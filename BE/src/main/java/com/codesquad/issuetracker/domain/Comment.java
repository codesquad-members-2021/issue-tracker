package com.codesquad.issuetracker.domain;

import lombok.*;

import javax.persistence.*;

import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private String content;

    private LocalDateTime createdAt;
    private Long issueId;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    public static Comment create(Long id, String content, LocalDateTime createdAt, Long issueId, User user) {
        return new Comment(id, content, createdAt, issueId, user);
    }
}
