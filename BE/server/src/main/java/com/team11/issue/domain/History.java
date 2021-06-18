package com.team11.issue.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "history")
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    private LocalDateTime historyDateTime;

    private String flag;

    @ManyToOne
    @JoinColumn(name = "issue_id")
    private Issue issue;

    public static History createHistory(User user, Issue issue) {
        return History.builder()
                .user(user)
                .historyDateTime(LocalDateTime.now())
                .flag("write")
                .issue(issue)
                .build();
    }

}

