package com.team11.issue.domain;

import lombok.*;

import javax.persistence.*;

@ToString
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
}
