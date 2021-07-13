package com.issuetracker.domain.comment;

import com.issuetracker.domain.BaseTimeEntity;
import com.issuetracker.domain.user.User;
import com.issuetracker.exception.IllegalUserAccessException;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String comment;

    @NonNull
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private User author;

    public static Comment create(User user, String comment) {
        return Comment.builder()
                .comment(comment)
                .author(user)
                .build();
    }

    public void update(String comment) {
        this.comment = comment;
    }

    public String getAuthorName() {
        return author.getUserName();
    }

    public String getAuthorAvatarUrl() {
        return author.getAvatarUrl();
    }

    public boolean matchAuthor(User user) {
        return author.equals(user);
    }

    public boolean verifyAuthor(User user) {
        return author.equals(user);
    }

    public boolean matchCommentId(Long commentId) {
        return id.equals(commentId);
    }
}
