package com.jane_eno.issue_tracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
@AllArgsConstructor
public class Label {

    private final Long id;
    private final String name;
    private final String colorCode;
    private final String description;
    private final boolean isChecked;
}
