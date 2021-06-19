package com.team11.issue.domain;

import com.team11.issue.dto.comment.CommentRequestDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String contents;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    private LocalDateTime createDateTime;

    public static Comment createComment(User user, Issue issue, CommentRequestDTO commentRequestDTO) {
        return Comment.builder()
                .contents(commentRequestDTO.getContents())
                .issue(issue)
                .user(user)
                .createDateTime(LocalDateTime.now())
                .build();
    }

    public void updateComment(String contents) {
        this.contents = contents;
    }

}
