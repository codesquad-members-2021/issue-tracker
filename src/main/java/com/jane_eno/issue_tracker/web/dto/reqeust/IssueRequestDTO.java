package com.jane_eno.issue_tracker.web.dto.reqeust;

import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Setter
@ToString
@NoArgsConstructor
public class IssueRequestDTO {

    private String title;
    private String comment;
    private List<Long> assignees;
    private List<Long> labels;
    private Long milestone;
}
