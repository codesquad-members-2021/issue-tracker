package com.codesquad.issuetracker.issue;

import com.codesquad.issuetracker.comment.CommentResponse;
import com.codesquad.issuetracker.comment.Emoji;
import com.codesquad.issuetracker.label.LabelResponse;
import com.codesquad.issuetracker.milestone.MileStoneResponse;
import com.codesquad.issuetracker.user.UserDummyData;

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
                        .author(UserDummyData.userFreddie())
                        .assignees(UserDummyData.usersResponse())
                        .labels(new HashSet<>(Arrays.asList(
                                labelBe()
                        )))
                        .milestone(milestoneMockup())
                        .build()
        );
    }

    public static IssueDetailResponse issueDetailResponse() {
        return IssueDetailResponse.builder()
                       .id(1L)
                       .number(1L)
                       .title("title")
                       .createDateTime(LocalDateTime.now())
                       .author(UserDummyData.userHiro())
                       .assignees(UserDummyData.usersResponse())
                       .labels(new HashSet<>(Arrays.asList(
                               labelBe()
                       )))
                       .milestone(milestoneMockup())
                       .mainComment(CommentResponse.builder()
                                            .id(1L)
                                            .author(UserDummyData.userFreddie())
                                            .contents("comment1")
                                            .createDateTime(LocalDateTime.now())
                                            .emojis(new HashSet<>(Arrays.asList(
                                                    Emoji.builder()
                                                            .value("😀")
                                                            .count(2)
                                                            .build(),
                                                    Emoji.builder()
                                                            .value("😂")
                                                            .count(2)
                                                            .build()
                                            )))
                                            .build())
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
