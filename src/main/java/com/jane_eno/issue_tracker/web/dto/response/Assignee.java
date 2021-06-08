package com.jane_eno.issue_tracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@AllArgsConstructor
@ToString
public class Assignee {

    private final Long id;
    private final String image;
    private final String userName;
    private final boolean isAssigned;
}
