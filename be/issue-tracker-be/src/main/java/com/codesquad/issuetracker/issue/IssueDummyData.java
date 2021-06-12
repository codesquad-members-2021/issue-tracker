package com.codesquad.issuetracker.issue;

import com.codesquad.issuetracker.comment.CommentResponse;
import com.codesquad.issuetracker.comment.Emoji;
import com.codesquad.issuetracker.label.LabelDummyData;
import com.codesquad.issuetracker.milestone.MileStoneDummyData;
import com.codesquad.issuetracker.user.UserDummyData;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashSet;

public class IssueDummyData {
    private IssueDummyData() {
    }

    public static IssueResponses issueResponses() {
        return IssueResponses.from(Arrays.asList(
                IssueResponse.builder()
                        .id(1L)
                        .number(1L)
                        .title("title")
                        .description("description설명")
                        .hasSameAuthorComments(true)
                        .createDateTime(LocalDateTime.now())
                        .author(UserDummyData.userFreddie())
                        .assignees(UserDummyData.usersResponse())
                        .labels(LabelDummyData.labelResponses())
                        .milestone(MileStoneDummyData.openMileStoneResponse())
                        .build()
        ));
    }

    public static IssueDetailResponse issueDetailResponse() {
        return IssueDetailResponse.builder()
                       .id(1L)
                       .number(1L)
                       .title("title")
                       .createDateTime(LocalDateTime.now())
                       .author(UserDummyData.userHiro())
                       .assignees(UserDummyData.usersResponse())
                       .labels(LabelDummyData.labelResponses())
                       .milestone(MileStoneDummyData.openMileStoneResponse())
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

}
