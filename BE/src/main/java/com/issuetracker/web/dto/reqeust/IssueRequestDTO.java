package com.issuetracker.web.dto.reqeust;

import lombok.*;

import java.util.List;

@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class IssueRequestDTO {

    private String title;
    private String comment;
    private List<Long> assignees;
    private List<Long> labels;
    private Long milestone;
}
