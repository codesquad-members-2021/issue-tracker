package com.codesquad.issuetracker.domain.milestone.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class EditedMilestoneRequest {

    private String title;

    private String content;

    @JsonProperty("due_date")
    @JsonFormat(pattern = "yyyy-MM-dd kk:mm:ss")
    private LocalDateTime dueDate;


}
