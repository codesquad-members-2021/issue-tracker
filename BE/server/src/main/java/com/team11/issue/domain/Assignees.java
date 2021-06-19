package com.team11.issue.domain;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "assignees")
public class Assignees {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public static Assignees createAssignees(Issue issue, User user) {
        return Assignees.builder()
                .issue(issue)
                .user(user)
                .build();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Assignees assignees = (Assignees) o;
        return Objects.equals(user, assignees.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user);
    }

    @Override
    public String toString() {
        return "Assignees{" +
                "id=" + id +
                ", issue=" + issue +
                ", user=" + user +
                '}';
    }
}
