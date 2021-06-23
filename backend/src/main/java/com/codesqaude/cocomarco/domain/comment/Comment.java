package com.codesqaude.cocomarco.domain.comment;

import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.domain.user.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;
    private LocalDateTime writingTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "writer")
    private User writer;

    public Comment(Issue issue, User writer, String text) {
        this.text = text;
        this.writingTime = LocalDateTime.now();
        this.issue = issue;
        this.writer = writer;
    }

    public void modify(String text) {
        this.text = text;
    }

    public boolean isSameWriter(UUID writerId) {
        return writer.sameUser(writerId);
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", writingTime=" + writingTime +
                '}';
    }

}
