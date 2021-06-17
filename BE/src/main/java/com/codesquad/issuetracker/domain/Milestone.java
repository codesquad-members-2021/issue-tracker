package com.codesquad.issuetracker.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    
    @JsonProperty("due_date")
    private LocalDateTime dueDate;

    @JsonProperty("open_issue")
    private int openedIssue;

    @JsonProperty("closed_issue")
    private int closedIssue;

    public static Milestone create(Long id, String title, String content, LocalDateTime dueDate, int openedIsssue, int closedIssue) {
        return new Milestone(id, title, content, dueDate, openedIsssue, closedIssue);
    }

    public static Milestone create(Long id, String title, String content, LocalDateTime dueDate) {
        return new Milestone(id, title, content, dueDate, 0, 0);
    }
}
