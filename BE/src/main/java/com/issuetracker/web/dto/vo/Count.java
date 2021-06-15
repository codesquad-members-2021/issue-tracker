package com.issuetracker.web.dto.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class Count {

    private final int label;
    private final int milestone;
    private final int openedIssue;
    private final int closedIssue;
}
