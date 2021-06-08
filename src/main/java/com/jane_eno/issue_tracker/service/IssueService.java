package com.jane_eno.issue_tracker.service;

import com.jane_eno.issue_tracker.web.dto.reqeust.IssueNumbersRequestDTO;
import com.jane_eno.issue_tracker.web.dto.response.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class IssueService {

    public IssuesResponseDTO getIssues(String status) {
        Count count = Count.builder()
                .label(3)
                .milestone(2)
                .closedIssue(5)
                .openedIssue(6)
                .build();
        IssueResponseDTO issue1 = IssueResponseDTO.
                builder()
                .id(1L)
                .title("[BE] 로그인 구현")
                .author("Jane")
                .createdDate(LocalDateTime.now())
                .commentNumber(5)
                .assignees(new ArrayList<>(Arrays.asList("janeljs", "enolj", "Ray")))
                .labels(new ArrayList<>(Arrays.asList("bug", "documentation")))
                .milestone("마스터즈 코스")
                .build();
        IssueResponseDTO issue2 = IssueResponseDTO.
                builder()
                .id(2L)
                .title("[FE] 로그인 구현")
                .author("주나미")
                .createdDate(LocalDateTime.now())
                .commentNumber(5)
                .assignees(new ArrayList<>(Arrays.asList("Kyle", "enolj", "Ray")))
                .labels(new ArrayList<>(Arrays.asList("bug", "documentation")))
                .milestone("마스터즈 코스")
                .build();
        IssueResponseDTO issue3 = IssueResponseDTO.
                builder()
                .id(3L)
                .title("[iOS] 로그인 구현")
                .author("Ray")
                .createdDate(LocalDateTime.now())
                .commentNumber(5)
                .assignees(new ArrayList<>(Arrays.asList("janeljs", "enolj", "Ray")))
                .labels(new ArrayList<>(Arrays.asList("bug", "enhancement")))
                .milestone("마스터즈 코스")
                .build();
        List<IssueResponseDTO> issues = new ArrayList<>();
        issues.add(issue1);
        issues.add(issue2);
        issues.add(issue3);
        return IssuesResponseDTO.builder()
                .count(count)
                .issues(issues)
                .build();
    }

    public void changeIssueStatus(IssueNumbersRequestDTO requestDTO) {
    }

    public IssueFormResponseDTO getIssueForm() {
        return IssueFormResponseDTO.builder()
                .assignees(new ArrayList<>(Arrays.asList(
                        new Assignee(1L, "imageString1", "eNoLJ"),
                        new Assignee(2L, "imageString2", "eNoLJ")
                )))
                .labels(new ArrayList<>(Arrays.asList(
                        new Label(1L, "bug", "#CCFFCC", "bug fix"),
                        new Label(2L, "enhancement", "#99FFFF", "enhancement")
                )))
                .milestones(new ArrayList<>(Arrays.asList(
                        new Milestone(1L, "마일스톤 제목", "레이블에 대한 설명", LocalDateTime.now(), 3, 1),
                        new Milestone(2L, "로그인 하기", "내일까지 끝내야 한다.", LocalDateTime.now(), 4, 5)
                )))
                .build();
    }
}
