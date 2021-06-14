package com.codesquad.issuetracker.milestone.controller;

import com.codesquad.issuetracker.milestone.dto.MilestoneResponse;
import com.codesquad.issuetracker.milestone.dto.MilestoneResponses;
import com.codesquad.issuetracker.milestone.dto.MilestonesCountResponse;

import java.time.LocalDate;
import java.util.Arrays;

public class MilestoneDummyData {
    private MilestoneDummyData() {
    }

    public static MilestoneResponses milestonesResponse() {
        return MilestoneResponses.from(Arrays.asList(
                openMilestoneResponse(),
                closeMilestoneResponse()
        ));
    }

    public static MilestoneResponse closeMilestoneResponse() {
        return  MilestoneResponse.builder()
                    .id(1L)
                    .name("[FE] 이슈리스트 페이지")
                    .description("이슈리스트 페이지 작성단위의 이슈를 모아서 관리")
                    .dueDate(LocalDate.of(2020, 12, 25))
                    .isClosed(true)
                    .openedIssueCount(1)
                    .closedIssueCount(1)
                    .build();
    }

    public static MilestoneResponse openMilestoneResponse() {
        return  MilestoneResponse.builder()
                    .id(2L)
                    .name("[BE] 목업데이터 작성하기")
                    .description("목업 데이터를 작성하는 이슈를 관리")
                    .dueDate(LocalDate.of(2020, 12, 25))
                    .isClosed(false)
                    .openedIssueCount(1)
                    .closedIssueCount(1)
                    .build();
    }

    public static MilestonesCountResponse milestonesCountResponses() {
        return MilestonesCountResponse.from(5);
    }
}
