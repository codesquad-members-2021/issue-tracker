package com.team11.issue.dto.issue;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class IssueRequestDTO {

    private String title;
    private String contents;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<Long> assignees;

    private Long authorId;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<Long> labels;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long milestone;
}
