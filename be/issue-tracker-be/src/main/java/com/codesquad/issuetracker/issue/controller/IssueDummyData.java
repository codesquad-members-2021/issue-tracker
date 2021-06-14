package com.codesquad.issuetracker.issue.controller;

import com.codesquad.issuetracker.comment.dto.CommentResponse;
import com.codesquad.issuetracker.comment.vo.Emoji;
import com.codesquad.issuetracker.issue.dto.IssueDetailResponse;
import com.codesquad.issuetracker.issue.dto.IssueResponse;
import com.codesquad.issuetracker.issue.dto.IssueResponses;
import com.codesquad.issuetracker.label.controller.LabelDummyData;
import com.codesquad.issuetracker.milestone.controller.MilestoneDummyData;
import com.codesquad.issuetracker.user.controller.UserDummyData;

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
                        .milestone(MilestoneDummyData.openMilestoneResponse())
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
                       .milestone(MilestoneDummyData.openMilestoneResponse())
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
