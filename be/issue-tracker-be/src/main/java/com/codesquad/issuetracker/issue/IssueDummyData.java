package com.codesquad.issuetracker.issue;

import com.codesquad.issuetracker.label.LabelResponse;
import com.codesquad.issuetracker.milestone.MileStoneResponse;
import com.codesquad.issuetracker.user.UserResponse;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashSet;
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
                        .hasSameAuthorComments(true)
                        .createDateTime(LocalDateTime.now())
                        .author(userFreddie())
                        .assignees(new HashSet<>(Arrays.asList(
                                userFreddie(),
                                userHiro()
                        )))
                        .labels(new HashSet<>(Arrays.asList(
                                labelBe()
                        )))
                        .milestone(milestoneMockup())
                        .build()
        );
    }

    private static UserResponse userFreddie() {
        return UserResponse.builder()
                       .id(1L)
                       .email("freddie@freddie.com")
                       .name("freddie")
                       .build();
    }

    private static UserResponse userHiro() {
        return UserResponse.builder()
                       .id(2L)
                       .email("hiro@hiro.com")
                       .name("hiro")
                       .build();
    }

    private static LabelResponse labelBe() {
        return LabelResponse.builder()
                       .id(1L)
                       .name("be")
                       .description("label for backend")
                       .color("#1679CF")
                       .build();
    }

    private static MileStoneResponse milestoneMockup() {
        return MileStoneResponse.builder()
                       .id(1L)
                       .name("목업 api 만들기")
                       .description("목업 api를 만들어봅시다.")
                       .openedIssueCount(2)
                       .closedIssueCount(2)
                       .build();
    }
}
