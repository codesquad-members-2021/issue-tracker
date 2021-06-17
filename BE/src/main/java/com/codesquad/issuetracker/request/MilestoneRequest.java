package com.codesquad.issuetracker.request;

import com.codesquad.issuetracker.domain.Milestone;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MilestoneRequest {

    private String title;

    private String content;

    @JsonProperty("due_date")
    @JsonFormat(pattern = "yyyy-MM-dd kk:mm:ss")
    private LocalDateTime dueDate;

    public Milestone create(Long id) {
        return Milestone.create(id, title, content, dueDate);
    }

    public Milestone create(){
        return create(null);
    }

}
