package com.jane_eno.issue_tracker.domain.comment;


import com.jane_eno.issue_tracker.domain.user.User;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String comment;

    @NonNull
    private LocalDateTime createdDateTime;

    @NonNull
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User author;

    public static Comment create(User user, String comment) {
        return Comment.builder()
                .comment(comment)
                .createdDateTime(LocalDateTime.now())
                .author(user)
                .build();
    }

    public boolean matchAuthor(User user) {
        return author.matchUser(user);
    }

    public boolean matchComment(Long commentId) {
        return id.equals(commentId);
    }

    public String getAuthorName() {
        return author.getUserName();
    }

    public void update(String comment) {
        this.comment = comment;
    }
}
