package com.jane_eno.issue_tracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class Assignee {

    private final Long id;
    private final String image;
    private final String userName;
}
