package com.jane_eno.issue_tracker.service;

import com.jane_eno.issue_tracker.domain.comment.Comment;
import com.jane_eno.issue_tracker.domain.issue.Issue;
import com.jane_eno.issue_tracker.domain.issue.IssueRepository;
import com.jane_eno.issue_tracker.domain.label.Color;
import com.jane_eno.issue_tracker.domain.label.Label;
import com.jane_eno.issue_tracker.domain.milestone.Milestone;
import com.jane_eno.issue_tracker.domain.user.User;
import com.jane_eno.issue_tracker.web.dto.reqeust.*;
import com.jane_eno.issue_tracker.web.dto.response.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static com.jane_eno.issue_tracker.web.dto.response.Assignee.createAssignee;
import static com.jane_eno.issue_tracker.web.dto.response.IssueResponseDTO.createIssueResponseDTO;
import static com.jane_eno.issue_tracker.web.dto.response.LabelDTO.createLabelDTO;

@Service
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;
    private final LabelService labelService;
    private final MilestoneService milestoneService;
    private final UserService userService;

    public IssuesResponseDTO getIssues(String status) {
        List<Issue> openedIssues = issueRepository.findAllByIsOpenTrue();
        List<Issue> closedIssues = issueRepository.findAllByIsOpenFalse();

        Count count = Count.builder()
                .label((int) labelService.count())
                .milestone((int) milestoneService.count())
                .openedIssue(openedIssues.size())
                .closedIssue(closedIssues.size())
                .build();

        List<IssueResponseDTO> issues = openedIssues.stream()
                .map(issue -> createIssueResponseDTO(issue, userToAssignee(issue), labelToLabelDTO(issue)))
                .collect(Collectors.toList());

        return IssuesResponseDTO.builder()
                .count(count)
                .issues(issues)
                .build();


//        IssueResponseDTO issue1 = IssueResponseDTO.
//                builder()
//                .id(1L)
//                .title("[BE] 로그인 구현")
//                .comment("로그인 구현해야 한다. 마감기한 촉박하다.")
//                .author("Jane")
//                .createdDateTime(LocalDateTime.now())
//                .commentNumber(5)
//                .assignees(new ArrayList<>(Arrays.asList(
//                        new Assignee(1L, "https://avatars.githubusercontent.com/u/65053955?v=4", "junamee", true),
//                        new Assignee(2L, "https://avatars.githubusercontent.com/u/74946802?v=4", "torch-ray", false)
//                )))
//                .labels(new ArrayList<>(Arrays.asList(
//                        new LabelDTO(1L, "bug", new Color("#FFFFFF", "#CCFFCC"), "bug fix", true),
//                        new LabelDTO(2L, "enhancement", new Color("#FFFFFF", "#99FFFF"), "enhancement", false)
//                )))
//                .milestone("마스터즈 코스")
//                .build();
//        IssueResponseDTO issue2 = IssueResponseDTO.
//                builder()
//                .id(2L)
//                .title("[FE] 로그인 구현")
//                .comment("로그인 구현해야 한다. 마감기한 촉박하다.")
//                .author("주나미")
//                .createdDateTime(LocalDateTime.now())
//                .commentNumber(5)
//                .assignees(new ArrayList<>(Arrays.asList(
//                        new Assignee(1L, "https://avatars.githubusercontent.com/u/65053955?v=4", "junamee", true),
//                        new Assignee(2L, "https://avatars.githubusercontent.com/u/74946802?v=4", "torch-ray", false)
//                )))
//                .labels(new ArrayList<>(Arrays.asList(
//                        new LabelDTO(1L, "bug", new Color("#FFFFFF", "#CCFFCC"), "bug fix", true),
//                        new LabelDTO(2L, "enhancement", new Color("#FFFFFF", "#99FFFF"), "enhancement", false)
//                )))
//                .milestone("마스터즈 코스")
//                .build();
//        IssueResponseDTO issue3 = IssueResponseDTO.
//                builder()
//                .id(3L)
//                .title("[iOS] 로그인 구현")
//                .comment("로그인 구현해야 한다. 마감기한 촉박하다.")
//                .author("Ray")
//                .createdDateTime(LocalDateTime.now())
//                .commentNumber(5)
//                .assignees(new ArrayList<>(Arrays.asList(
//                        new Assignee(1L, "https://avatars.githubusercontent.com/u/65053955?v=4", "junamee", true),
//                        new Assignee(2L, "https://avatars.githubusercontent.com/u/74946802?v=4", "torch-ray", false)
//                )))
//                .labels(new ArrayList<>(Arrays.asList(
//                        new LabelDTO(1L, "bug", new Color("#FFFFFF", "#CCFFCC"), "bug fix", true),
//                        new LabelDTO(2L, "enhancement", new Color("#FFFFFF", "#99FFFF"), "enhancement", false)
//                )))
//                .milestone("마스터즈 코스")
//                .build();
//        List<IssueResponseDTO> issues = new ArrayList<>();
//        issues.add(issue1);
//        issues.add(issue2);
//        issues.add(issue3);
//        return IssuesResponseDTO.builder()
//                .count(count)
//                .issues(issues)
//                .build();
    }

    private List<Assignee> userToAssignee(Issue issue) {
        return userService.findAll().stream()
                .map(user -> createAssignee(user, issue))
                .collect(Collectors.toList());
    }

    private List<LabelDTO> labelToLabelDTO(Issue issue) {
        return labelService.findAllLabels().stream()
                .map(label -> createLabelDTO(label, issue))
                .collect(Collectors.toList());
    }

    public void changeIssueStatus(IssueNumbersRequestDTO requestDTO) {

    }

    public IssueFormResponseDTO getIssueForm() {
        return IssueFormResponseDTO.builder()
                .assignees(new ArrayList<>(Arrays.asList(
                        new Assignee(1L, "imageString1", "eNoLJ", true),
                        new Assignee(2L, "imageString2", "eNoLJ", false)
                )))
//                .labels(labelService.findAllLabels())
                .milestones(milestoneService.findAllMilestones())
                .build();
    }

    public void createIssue(IssueRequestDTO issueRequestDTO, Long userId) {
        User author = userService.findByUserId(userId);
        List<Label> labels = labelService.findLabels(issueRequestDTO.getLabels());
        List<User> assignees = userService.findAssignees(issueRequestDTO.getAssignees());
        Milestone milestone = milestoneService.findMilestoneById(issueRequestDTO.getMilestone());
        Issue issue = issueRequestDTO.toEntity();
        Issue is = issueRepository.save(issue.create(author, labels, assignees, milestone));
        is.getComments().add(Comment.builder().comment("안녕").createdDateTime(LocalDateTime.now()).build());
        issueRepository.save(is);
    }

    public IssueDetailPageResponseDTO getDetailPage(Long issueId) {
        return IssueDetailPageResponseDTO.builder()
                .id(1L)
                .title("FE 이슈트래커 디자인 구현")
                .status(true)
                .createdDateTime(LocalDateTime.now())
                .comments(new ArrayList<>(Arrays.asList(
                        new CommentDTO(1L, "jane", "주나미 최고",
                                LocalDateTime.of(LocalDate.of(2021, 6, 6), LocalTime.of(10, 10, 10)),
                                true, false),
                        new CommentDTO(1L, "kyle", "레이 최고",
                                LocalDateTime.of(LocalDate.of(2021, 6, 6), LocalTime.of(10, 10, 10)),
                                true, false)
                )))
                .assignees(new ArrayList<>(Arrays.asList(
                        new Assignee(1L, "https://avatars.githubusercontent.com/u/65053955?v=4", "junamee", true),
                        new Assignee(2L, "https://avatars.githubusercontent.com/u/74946802?v=4", "torch-ray", false)
                )))
                .labels(new ArrayList<>(Arrays.asList(
                        new LabelDTO(1L, "bug", new Color("#FFFFFF", "#CCFFCC"), "bug fix", true),
                        new LabelDTO(2L, "enhancement", new Color("#FFFFFF", "#99FFFF"), "enhancement", false)
                )))
                .milestones(new ArrayList<>(Arrays.asList(
                        new MilestoneDTO(1L, "마일스톤 제목", "레이블에 대한 설명", LocalDateTime.now(), null, 3, 1),
                        new MilestoneDTO(2L, "로그인 하기", "내일까지 끝내야 한다.", LocalDateTime.now(), null, 4, 5)
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
                        new LabelDTO(1L, "bug", new Color("#FFFFFF", "#CCFFCC"), "bug fix", true),
                        new LabelDTO(2L, "enhancement", new Color("#FFFFFF", "#99FFFF"), "enhancement", false)
                ))).build();
    }

    public void updateLabels(Long issueId, LabelsToUpdateRequestDTO labelsToUpdateRequestDTO) {

    }

    public MilestonesInIssueResponseDTO getMilestones(Long issueId) {
        return MilestonesInIssueResponseDTO.builder()
                .milestones(new ArrayList<>(Arrays.asList(
                        new MilestoneDTO(1L, "마일스톤 제목", "레이블에 대한 설명", LocalDateTime.now(), null, 3, 1),
                        new MilestoneDTO(2L, "로그인 하기", "내일까지 끝내야 한다.", LocalDateTime.now(), null, 4, 5)
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
