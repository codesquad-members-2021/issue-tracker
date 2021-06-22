package team02.issue_tracker.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE emoji SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
public class Emoji {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private boolean isDeleted;

    @OneToMany(mappedBy = "emoji", fetch = FetchType.LAZY)
    private List<CommentEmoji> commentEmojis = new ArrayList<>();
}
