package team02.issue_tracker.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Emoji {
    @Id @GeneratedValue
    private Long id;

    private String name;

    @OneToMany(mappedBy = "emoji")
    private List<CommentEmoji> commentEmojis = new ArrayList<>();
}
