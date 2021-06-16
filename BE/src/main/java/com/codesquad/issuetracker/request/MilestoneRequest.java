package com.codesquad.issuetracker.request;

import com.codesquad.issuetracker.domain.Milestone;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class MilestoneRequest {

    private String title;
    private String content;
    private LocalDateTime dueDate;

    public Milestone create(Long id) {
        return Milestone.create(id, title, content, dueDate);
    }

    public Milestone create(){
        return create(null);
    }

}
