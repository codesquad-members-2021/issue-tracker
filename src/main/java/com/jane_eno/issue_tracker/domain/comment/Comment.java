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

    public boolean matchAuthor(User user) {
        return author.matchUser(user);
    }

    public String getAuthorName() {
        return author.getUserName();
    }
}
