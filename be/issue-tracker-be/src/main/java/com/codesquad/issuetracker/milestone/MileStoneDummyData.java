package com.codesquad.issuetracker.milestone;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class MileStoneDummyData {
    private MileStoneDummyData() {
    }

    public static Set<MileStoneResponse> MileStoneResponse() {
        return new HashSet<>(Arrays.asList(
                MileStoneResponse.builder()
                    .id(1L)
                    .name("milestone명")
                    .description("milestone설명")
                    .dueDate(LocalDate.of(2020, 12, 25))
                    .isClosed(true)
                    .openedIssueCount(1)
                    .closedIssueCount(1)
                    .build()
        ));
    }
}
