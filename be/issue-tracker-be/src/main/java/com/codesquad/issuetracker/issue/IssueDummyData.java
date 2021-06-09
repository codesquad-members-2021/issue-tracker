package com.codesquad.issuetracker.issue;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

public class IssueDummyData {
    private IssueDummyData() {
    }

    public static List<IssueResponse> issueResponses() {
        return Arrays.asList(
                IssueResponse.builder()
                        .id(1L)
                        .number(1L)
                        .title("title")
                        .description("description설명")
                        .isAuthorSame(true)
                        .createDateTime(LocalDateTime.now())
                        .author(userFreddie())
                        .assignees(Arrays.asList(
                                userFreddie(),
                                userHiro()
                        ))
                        .labels(Arrays.asList(
                                labelBe()
                        ))
                        .milestone(milestoneMockup())
                        .build()
        );
    }

    private static IssueResponse.User userFreddie() {
        return IssueResponse.User.builder()
                       .id(1L)
                       .email("freddie@freddie.com")
                       .name("freddie")
                       .build();
    }

    private static IssueResponse.User userHiro() {
        return IssueResponse.User.builder()
                       .id(2L)
                       .email("hiro@hiro.com")
                       .name("hiro")
                       .build();
    }

    private static IssueResponse.Label labelBe() {
        return IssueResponse.Label.builder()
                       .id(1L)
                       .name("be")
                       .description("label for backend")
                       .color("#1679CF")
                       .build();
    }

    private static IssueResponse.Milestone milestoneMockup() {
        return IssueResponse.Milestone.builder()
                       .id(1L)
                       .name("목업 api 만들기")
                       .description("목업 api를 만들어봅시다.")
                       .openedIssueCount(2)
                       .closedIssueCount(2)
                       .build();
    }
}
