package com.codesqaude.cocomarco.domain.comment;

import com.codesqaude.cocomarco.common.BasicEntity;
import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.domain.user.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment extends BasicEntity {

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

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", writingTime=" + writingTime +
                '}';
    }
}
