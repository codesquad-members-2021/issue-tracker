package team02.issue_tracker.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Emoji {
    @Id @GeneratedValue
    private Long id;

    private String name;
    private boolean deleted;

    @OneToMany(mappedBy = "emoji")
    private List<CommentEmoji> commentEmojis = new ArrayList<>();
}
