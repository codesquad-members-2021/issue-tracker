package com.codesqaude.cocomarco;

import com.codesqaude.cocomarco.domain.issue.IssueRepository;
import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueRequest;
import com.codesqaude.cocomarco.domain.label.LabelRepository;
import com.codesqaude.cocomarco.domain.milestone.Milestone;
import com.codesqaude.cocomarco.domain.milestone.MilestoneRepository;
import com.codesqaude.cocomarco.domain.user.User;
import com.codesqaude.cocomarco.domain.user.UserRepository;
import com.codesqaude.cocomarco.service.CommentService;
import com.codesqaude.cocomarco.service.IssueService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Optional;

import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class IssueTest {

    @InjectMocks
    CommentService commentService;

    @InjectMocks
    IssueService issueService;

    @Mock
    UserRepository userRepository;

    @Mock
    LabelRepository labelRepository;

    @Mock
    MilestoneRepository milestoneRepository;

    @Mock
    IssueRepository issueRepository;

    @Test
    @DisplayName("이슈 세이브 검증")
    void IssueSave() {
        IssueRequest issueRequest = new IssueRequest("타이틀", "텍스트", Arrays.asList(User.SAMPLE_UUID.toString()), Arrays.asList(1L, 2L), 1L);
        User user = new User(User.SAMPLE_UUID, "유저", "이미지");
        Milestone milestone = new Milestone("타이틀", "디테일", LocalDate.now());
        Issue issue = Issue.createIssue(user, "이슈", "이슈본문", null, null, milestone);

        //given
        given(userRepository.findById(User.SAMPLE_UUID)).willReturn(Optional.ofNullable(user));
        given(milestoneRepository.findById(1L)).willReturn(Optional.ofNullable(milestone));
        given(issueRepository.findById(2L)).willReturn(Optional.ofNullable(issue));

        //when
        issueService.create(issueRequest, User.SAMPLE_UUID);

        //then
        Issue byId = issueService.findById(2L);
        System.out.println(byId);
    }

    @Test
    @DisplayName("이슈 타이틀 수정")
    void IssueModifyTitle() {
        IssueRequest issueRequest = new IssueRequest("타이틀", "텍스트", Arrays.asList(User.SAMPLE_UUID.toString()), Arrays.asList(1L, 2L), 1L);
        User user = new User(User.SAMPLE_UUID, "유저", "이미지");
        Milestone milestone = new Milestone("타이틀", "디테일", LocalDate.now());
        Issue issue = Issue.createIssue(user, "이슈", "이슈본문", null, null, milestone);

        //given
        given(userRepository.findById(User.SAMPLE_UUID)).willReturn(Optional.ofNullable(user));
        given(milestoneRepository.findById(1L)).willReturn(Optional.ofNullable(milestone));
        given(issueRepository.findById(1L)).willReturn(Optional.ofNullable(issue));

        //when
        issueService.create(issueRequest, User.SAMPLE_UUID);
        Issue findIssue = issueService.findById(1L);

        //then
        findIssue.changeTitle("변경 타이틀");
        
        System.out.println(findIssue);
    }

}
