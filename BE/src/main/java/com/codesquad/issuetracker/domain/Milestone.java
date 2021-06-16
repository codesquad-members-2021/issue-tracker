package com.codesquad.issuetracker.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Milestone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private LocalDateTime dueDate;
    private int openedIssue;
    private int closedIssue;


    public static Milestone create(Long id, String title, String content, LocalDateTime dueDate, int openedIsssue, int closedIssue) {
        return new Milestone(id, title, content, dueDate, openedIsssue, closedIssue);
    }

    public static Milestone create(Long id, String title, String content, LocalDateTime dueDate) {
        return new Milestone(id, title, content, dueDate, 0, 0);
    }
}
