package com.codesquad.issuetracker.domain.milestone;

import com.codesquad.issuetracker.domain.milestone.request.EditedMilestoneRequest;
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

    public Milestone(String title, String content, LocalDateTime dueDate){
        this.title = title;
        this.content = content;
        this.dueDate = dueDate;
    }

    public static Milestone create(Long id, String title, String content, LocalDateTime dueDate, int openedIsssue, int closedIssue) {
        return new Milestone(id, title, content, dueDate, openedIsssue, closedIssue);
    }

    public static Milestone create(String title, String content, LocalDateTime dueDate) {
        return new Milestone(title, content, dueDate);
    }

    public void update(EditedMilestoneRequest editedMilestoneRequest) {
        this.title = editedMilestoneRequest.getTitle();
        this.content = editedMilestoneRequest.getContent();
        this.dueDate = editedMilestoneRequest.getDueDate();
    }
}
