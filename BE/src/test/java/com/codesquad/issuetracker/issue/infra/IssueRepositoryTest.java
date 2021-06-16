package com.codesquad.issuetracker.issue.infra;

import com.codesquad.issuetracker.auth.dto.GitHubUser;
import com.codesquad.issuetracker.issue.domain.Issue;
import com.codesquad.issuetracker.label.domain.Colors;
import com.codesquad.issuetracker.label.domain.Label;
import com.codesquad.issuetracker.label.infra.LabelRepository;
import com.codesquad.issuetracker.milestone.domain.Milestone;
import com.codesquad.issuetracker.milestone.infra.MilestoneRepository;
import com.codesquad.issuetracker.user.domain.User;
import com.codesquad.issuetracker.user.infra.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static org.assertj.core.api.Assertions.*;

@DataJpaTest
class IssueRepositoryTest {

    @Autowired
    IssueRepository issueRepository;

    @Autowired
    LabelRepository labelRepository;

    @Autowired
    MilestoneRepository milestoneRepository;

    @Autowired
    UserRepository userRepository;

    User K;
    User Cooper;

    Label docs;
    Label feat;
    Label refactor;

    Milestone issueTracker;

    @PersistenceContext
    EntityManager entityManager;

    @BeforeEach
    void setUp() {
        GitHubUser githubK = new GitHubUser();
        githubK.setLogin("PizzaCola-K");
        githubK.setName("K");
        githubK.setAvatarUrl("localhost:8080/k.jpg");

        GitHubUser githubCooper = new GitHubUser();
        githubCooper.setLogin("cooper");
        githubCooper.setName("cooper");
        githubCooper.setAvatarUrl("cooper.jpg");

        User userK = User.fromGitHubUser(githubK);
        User userCooper = User.fromGitHubUser(githubCooper);
        K = userRepository.save(userK);
        Cooper = userRepository.save(userCooper);

        docs = Label.create("docs", "문서 작업", new Colors.Builder().backgroundColor("#FFFFFF").textColor("#000000").build());
        refactor = Label.create("refactor", "리팩토링", new Colors.Builder().backgroundColor("#FEF0F1").textColor("#000000").build());
        feat = Label.create("feat", "기능 추가", new Colors.Builder().backgroundColor("#F4245F").textColor("#000000").build());

        issueTracker = Milestone.create("[BE] 이슈 트래커", "이슈 추가", null);

        docs = labelRepository.save(docs);
        refactor = labelRepository.save(refactor);
        feat = labelRepository.save(feat);

        issueTracker = milestoneRepository.save(issueTracker);
    }


    @Test
    @DisplayName("이슈를 생성하여 저장한다.")
    void createIssue() {
        Issue issue = Issue.create(K, "이슈 생성 및 저장");
        issue.addAssignee(Cooper);
        issue.addAssignee(K);
        issue.addLabel(feat);
        issue.addLabel(docs);
        issue.addLabel(refactor);
        issue.setMilestone(issueTracker);

        issueRepository.save(issue);
        entityManager.flush();

        entityManager.clear();

        Issue foundIssue = issueRepository.findById(issue.getId()).orElseThrow(RuntimeException::new);
        assertThat(issue).isEqualTo(foundIssue);
    }

}

