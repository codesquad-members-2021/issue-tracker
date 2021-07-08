package com.issuetracker.domain.issue;

import com.issuetracker.domain.label.Label;
import com.issuetracker.domain.label.LabelRepository;
import com.issuetracker.domain.milestone.Milestone;
import com.issuetracker.domain.milestone.MilestoneRepository;
import com.issuetracker.domain.user.User;
import com.issuetracker.domain.user.UserRepository;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Transactional
@SpringBootTest
@ExtendWith(MockitoExtension.class)
@ExtendWith(SoftAssertionsExtension.class)
class IssueRepositoryTest {

    @InjectSoftAssertions
    SoftAssertions softly;

    private UserRepository userRepository;
    private IssueRepository issueRepository;
    private LabelRepository labelRepository;
    private MilestoneRepository milestoneRepository;

//    @BeforeEach
//    public void setUp() {
//        User user1 = userRepository.getById(1L);
//        List<Label> labels1 = labelRepository.findAllById(new ArrayList<>(Arrays.asList(1L, 2L)));
//        List<User> assignees1 = userRepository.findAllById(new ArrayList<>(Arrays.asList(1L, 2L)));
//        Milestone milestone1 = milestoneRepository.findById(1L).get();
//        Issue issue1 = Issue.create("이슈 1번", "이슈 내용", user1, labels1, assignees1, milestone1);
//        issueRepository.save(issue1);
//
//        User user2 = userRepository.getById(2L);
//        List<Label> labels2 = labelRepository.findAllById(new ArrayList<>(Arrays.asList(1L, 2L)));
//        List<User> assignee2 = userRepository.findAllById(new ArrayList<>(Arrays.asList(1L, 2L)));
//        Milestone milestone2 = milestoneRepository.findById(2L).get();
//        Issue issue2 = Issue.create("이슈 2번", "이슈 내용", user2, labels2, assignee2, milestone2);
//        issueRepository.save(issue2);
//    }
//
//    @Test
//    @DisplayName("주어진 아이디 리스트의 이슈 상태를 변경한다.")
//    public void verifyUpdateStatus() {
//        issueRepository.updateStatusBy(false, Arrays.asList(1L, 2L));
//        Issue issue1 = issueRepository.findById(1L).get();
//        Issue issue2 = issueRepository.findById(2L).get();
//
//        softly.assertThat(issue1.isClosed()).isTrue();
//        softly.assertThat(issue2.isClosed()).isTrue();
//    }
}
