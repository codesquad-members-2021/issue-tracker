package com.codesquad.issuetracker.domain.comment;

import com.codesquad.issuetracker.domain.user.User;
import com.fasterxml.jackson.annotation.JsonProperty;
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

    @JsonProperty("created_at")
    private LocalDateTime createdAt;

    @JsonProperty("issue_id")
    private Long issueId;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    public static Comment create(Long id, String content, LocalDateTime createdAt, Long issueId, User user) {
        return new Comment(id, content, createdAt, issueId, user);
    }
}
