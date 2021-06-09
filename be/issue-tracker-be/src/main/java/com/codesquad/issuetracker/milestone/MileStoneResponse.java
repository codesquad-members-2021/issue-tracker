package com.codesquad.issuetracker.milestone;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MileStoneResponse {
    private Long id;
    private String name;
    private String description;
    //TODO: 완료일 추가해야함.
    private boolean isClosed;
    private int openedIssueCount;
    private int closedIssueCount;
}
