package com.team11.issue.dto.issue;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class IssueRequestDTO {

    private String title;
    private String contents;
    private List<Long> assignees = new ArrayList<>();
    private Long authorId;
    private List<Long> labels = new ArrayList<>();
    private Long milestone;
}
