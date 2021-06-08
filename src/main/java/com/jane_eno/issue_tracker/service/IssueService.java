package com.jane_eno.issue_tracker.service;

import com.jane_eno.issue_tracker.web.dto.reqeust.*;
import com.jane_eno.issue_tracker.web.dto.response.*;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
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
                .createdDateTime(LocalDateTime.now())
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
                .createdDateTime(LocalDateTime.now())
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
                .createdDateTime(LocalDateTime.now())
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
                        new Assignee(1L, "imageString1", "eNoLJ", true),
                        new Assignee(2L, "imageString2", "eNoLJ", false)
                )))
                .labels(new ArrayList<>(Arrays.asList(
                        new Label(1L, "bug", "#CCFFCC", "bug fix", true),
                        new Label(2L, "enhancement", "#99FFFF", "enhancement", false)
                )))
                .milestones(new ArrayList<>(Arrays.asList(
                        new Milestone(1L, "마일스톤 제목", "레이블에 대한 설명", LocalDateTime.now(), null, 3, 1),
                        new Milestone(2L, "로그인 하기", "내일까지 끝내야 한다.", LocalDateTime.now(), null, 4, 5)
                )))
                .build();
    }

    public void createIssue(IssueRequestDTO issueRequestDTO) {
    }

    public IssueDetailPageResponseDTO getDetailPage(Long issueId) {
        return IssueDetailPageResponseDTO.builder()
                .id(1L)
                .title("FE 이슈트래커 디자인 구현")
                .status(true)
                .createdDateTime(LocalDateTime.now())
                .comments(new ArrayList<>(Arrays.asList(
                        new Comment(1L, "jane", "주나미 최고",
                                LocalDateTime.of(LocalDate.of(2021,6,6), LocalTime.of(10,10,10)),
                        true, false),
                        new Comment(1L, "kyle", "레이 최고",
                                LocalDateTime.of(LocalDate.of(2021,6,6), LocalTime.of(10,10,10)),
                                true, false)
                )))
                .assignees(new ArrayList<>(Arrays.asList(
                        new Assignee(1L, "https://avatars.githubusercontent.com/u/65053955?v=4", "junamee", true),
                        new Assignee(2L, "https://avatars.githubusercontent.com/u/74946802?v=4", "torch-ray", false)
                )))
                .labels(new ArrayList<>(Arrays.asList(
                        new Label(1L, "bug", "#CCFFCC", "bug fix", true),
                        new Label(2L, "enhancement", "#99FFFF", "enhancement", false)
                )))
                .milestones(new ArrayList<>(Arrays.asList(
                        new Milestone(1L, "마일스톤 제목", "레이블에 대한 설명", LocalDateTime.now(), null, 3, 1),
                        new Milestone(2L, "로그인 하기", "내일까지 끝내야 한다.", LocalDateTime.now(), null, 4, 5)
                )))
                .build();
    }

    public void updateIssueTitle(Long issueId, IssueTitleDTO issueTitleDTO) {
    }

    public AssigneesResponseDTO getAssignees(Long issueId) {
        return AssigneesResponseDTO.builder()
                .assignees(new ArrayList<>(Arrays.asList(
                        new Assignee(1L, "https://avatars.githubusercontent.com/u/65053955?v=4", "junamee", true),
                        new Assignee(2L, "https://avatars.githubusercontent.com/u/74946802?v=4", "torch-ray", false)
                )))
                .build();
    }

    public void updateAssignees(Long issueId, AssigneesToUpdateRequestDTO updateAssigneesRequestDTO) {
    }

    public LabelsInIssueResponseDTO getLabels(Long issueID) {
        return LabelsInIssueResponseDTO.builder()
                .labels(new ArrayList<>(Arrays.asList(
                        new Label(1L, "bug", "#CCFFCC", "bug fix", true),
                        new Label(2L, "enhancement", "#99FFFF", "enhancement", false)
                ))).build();
    }

    public void updateLabels(Long issueId, LabelsToUpdateRequestDTO labelsToUpdateRequestDTO) {

    }

    public MilestonesInIssueResponseDTO getMilestones(Long issueId) {
        return MilestonesInIssueResponseDTO.builder()
                .milestones(new ArrayList<>(Arrays.asList(
                        new Milestone(1L, "마일스톤 제목", "레이블에 대한 설명", LocalDateTime.now(), null, 3, 1),
                        new Milestone(2L, "로그인 하기", "내일까지 끝내야 한다.", LocalDateTime.now(), null, 4, 5)
                )))
                .build();
    }

    public void updateMilestones(Long issueId, MilestonesToUpdateRequestDTO milestonesToUpdateRequestDTO) {

    }

    public void createComment(Long issueId, String comment) {

    }

    public void updateComment(Long issueId, String comment) {

    }

    public void deleteComment(Long issueId, Long commentId) {

    }
}
